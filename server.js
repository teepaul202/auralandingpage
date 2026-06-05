// server.ts
import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
var app = express();
var PORT = process.env.PORT || 5e3;
app.use(cors());
app.use(express.json());
var db = null;
var inMemorySubscriptions = /* @__PURE__ */ new Set();
var inMemoryMessages = [];
try {
  const rawDbPath = process.env.DATABASE_PATH || "./database.db";
  const dbPath = path.isAbsolute(rawDbPath) ? rawDbPath : path.resolve(process.cwd(), rawDbPath);
  const dbDir = path.dirname(dbPath);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  db = new Database(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log(`SQLite database initialized successfully at: ${dbPath}`);
} catch (err) {
  console.warn("SQLite database initialization failed. Falling back to In-Memory store:", err);
  db = null;
}
async function sendContactEmail(name, email, inquiryType, message) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFICATION_EMAIL || "your-recipient@email.com";
  if (!apiKey) {
    console.log("Skipping email notification: RESEND_API_KEY is not defined in environment.");
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Aura Portal Sentry <onboarding@resend.dev>",
        to: recipient,
        subject: `New Aura Contact Inquiry: [${inquiryType}] from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fbfbf6; color: #1e251a;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #1e251a; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
            <p style="font-size: 14px;">A visitor has submitted a new inquiry through the Aura global employment portal:</p>
            <table style="width: 100%; font-size: 13px; margin: 20px 0;">
              <tr>
                <td style="font-weight: bold; width: 140px; padding: 5px 0;">Corporate Rep:</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 5px 0;">Corporate Email:</td>
                <td><a href="mailto:${email}" style="color: #1e251a; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 5px 0;">Inquiry Parameter:</td>
                <td><span style="background-color: #e2e8f0; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: bold;">${inquiryType}</span></td>
              </tr>
            </table>
            <p style="font-[10px] font-weight: bold; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.05em; color: #4e5549;">Technical Details:</p>
            <div style="background-color: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; font-size: 13px; line-height: 1.5; color: #333; min-height: 80px;">
              ${message.replace(/\n/g, "<br />")}
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0 15px 0;" />
            <p style="font-size: 10px; color: #888; text-align: center; margin: 0;">\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Aura Global Employment Schema Network.</p>
          </div>
        `
      })
    });
    if (res.ok) {
      console.log(`Email notification successfully sent to ${recipient} via Resend.`);
    } else {
      const errText = await res.text();
      console.error("Failed to send email via Resend API:", errText);
    }
  } catch (err) {
    console.error("Error calling Resend email API:", err);
  }
}
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Please supply a valid corporate email string." });
  }
  if (db) {
    try {
      const stmt = db.prepare("INSERT INTO subscriptions (email) VALUES (?)");
      stmt.run(email);
      return res.status(200).json({ message: "Subscribed to structural regulatory alerts!" });
    } catch (err) {
      if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
        return res.status(409).json({ error: "This email is already subscribed." });
      }
      console.error("Database subscription error:", err);
      return res.status(500).json({ error: "Internal server error occurred." });
    }
  } else {
    const lowercaseEmail = email.toLowerCase();
    if (inMemorySubscriptions.has(lowercaseEmail)) {
      return res.status(409).json({ error: "This email is already subscribed." });
    }
    inMemorySubscriptions.add(lowercaseEmail);
    console.log(`[Memory DB] Subscribed newsletter: ${email}`);
    return res.status(200).json({ message: "Subscribed to structural regulatory alerts! (Session Sync)" });
  }
});
app.post("/api/contact", (req, res) => {
  const { name, email, message, inquiryType } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const resolvedInquiryType = inquiryType || "General Queries";
  if (db) {
    try {
      const stmt = db.prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
      stmt.run(name, email, message);
      sendContactEmail(name, email, resolvedInquiryType, message).catch((err) => {
        console.error("Unhandled email dispatch error:", err);
      });
      return res.status(200).json({ message: "Message recorded successfully. Our team will sync shortly." });
    } catch (err) {
      console.error("Database contact error:", err);
      return res.status(500).json({ error: "Internal database error." });
    }
  } else {
    inMemoryMessages.push({ name, email, message, inquiryType: resolvedInquiryType, created_at: /* @__PURE__ */ new Date() });
    console.log(`[Memory DB] Contact submission from ${name} (${email}): ${message}`);
    sendContactEmail(name, email, resolvedInquiryType, message).catch((err) => {
      console.error("Unhandled email dispatch error:", err);
    });
    return res.status(200).json({ message: "Message recorded successfully. (Session Sync)" });
  }
});
app.get("/api/socials", async (req, res) => {
  const githubUser = process.env.GITHUB_USERNAME || "google";
  const twitterUser = process.env.TWITTER_USERNAME || "Google";
  const linkedinUser = process.env.LINKEDIN_USERNAME || "google";
  const responseData = {
    github: {
      username: githubUser,
      url: `https://github.com/${githubUser}`,
      avatar: "https://github.com/identicons/google.png",
      followers: 120,
      publicRepos: 10,
      recentRepos: []
    },
    twitter: {
      username: twitterUser,
      url: `https://twitter.com/${twitterUser}`,
      followers: "1.5K"
    },
    linkedin: {
      username: linkedinUser,
      url: `https://linkedin.com/company/${linkedinUser}`
    }
  };
  try {
    const userRes = await fetch(`https://api.github.com/users/${githubUser}`, {
      headers: {
        "User-Agent": "Aura-App-Server"
      }
    });
    if (userRes.ok) {
      const userData = await userRes.json();
      responseData.github.avatar = userData.avatar_url;
      responseData.github.followers = userData.followers;
      responseData.github.publicRepos = userData.public_repos;
    }
    const repoRes = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=4`, {
      headers: {
        "User-Agent": "Aura-App-Server"
      }
    });
    if (repoRes.ok) {
      const repoData = await repoRes.json();
      responseData.github.recentRepos = repoData.map((repo) => ({
        name: repo.name,
        description: repo.description || "No description provided.",
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language || "TypeScript"
      }));
    }
  } catch (error) {
    console.warn("GitHub API fetch failed, falling back to mock details:", error);
    responseData.github.recentRepos = [
      {
        name: "aura-core",
        description: "Global employment schema engines, built for sub-millisecond statutory sync.",
        url: `https://github.com/${githubUser}`,
        stars: 342,
        language: "TypeScript"
      },
      {
        name: "compliance-sentry",
        description: "Automated labor contract verification and tax compliance shield agent.",
        url: `https://github.com/${githubUser}`,
        stars: 189,
        language: "Rust"
      },
      {
        name: "neuro-integrator",
        description: "V6 EOR data transformation and neural translation pipelines.",
        url: `https://github.com/${githubUser}`,
        stars: 94,
        language: "Go"
      }
    ];
  }
  res.json(responseData);
});
var distPath = path.resolve(process.cwd(), "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Aura API Server is active in Development Mode.");
  });
}
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
