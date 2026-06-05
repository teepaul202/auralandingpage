import React from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number; // duration in seconds
  speedOnHover?: number; // duration in seconds when hovered
}

export function InfiniteSlider({
  children,
  gap = 42,
  reverse = false,
  speed = 40,
  speedOnHover = 20,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const currentSpeed = isHovered && speedOnHover ? speedOnHover : speed;
  const animationName = reverse ? "marquee-reverse" : "marquee-normal";

  return (
    <div 
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes marquee-normal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation-name: ${animationName};
          animation-duration: ${currentSpeed}s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      <div 
        className="marquee-track"
        style={{ gap: `${gap}px` }}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
