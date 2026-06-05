import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, MessageSquare, ArrowRight, Check, AlertCircle, RefreshCw } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'EOR Consultation',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please supply name, email, and message details.');
      return;
    }
    
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setStatusMsg(data.message || 'Message recorded successfully. Our team will sync shortly.');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'EOR Consultation',
          message: ''
        });
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMsg('Network error occurred. Please try again.');
    }
  };

  const labelColor = isDarkMode ? 'text-stone-400' : 'text-stone-600';
  const headerColor = isDarkMode ? 'text-white' : 'text-stone-900';
  const inputBg = isDarkMode ? 'bg-stone-950 border-stone-850 focus:border-stone-700' : 'bg-stone-50 border-stone-200 focus:border-stone-400';
  const inputTextColor = isDarkMode ? 'text-stone-200' : 'text-stone-900';

  return (
    <section 
      id="contact-form-section" 
      className={`py-20 relative w-full overflow-hidden transition-colors duration-500 z-10 border-t ${
        isDarkMode 
          ? 'bg-[#111111] border-stone-850 text-stone-100' 
          : 'bg-white border-stone-100 text-stone-950'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full blur-[130px] pointer-events-none opacity-20 bg-indigo-500/30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold text-stone-500 dark:text-stone-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-white animate-pulse" />
            Statutory Guard Intake
          </span>
          <h2 className={`mt-2 text-2xl md:text-3xl font-bold tracking-tight ${headerColor}`}>
            Initiate Schema Integration
          </h2>
          <p className={`mt-2 text-xs md:text-sm max-w-lg text-stone-500 dark:text-stone-400`}>
            Submit your compliance parameters or ecosystem integration requests. Our global team answers within 1 hour.
          </p>
        </div>

        {/* Contact Form Card */}
        <div 
          className={`p-6 md:p-10 rounded-3xl border transition-all duration-300 shadow-xl ${
            isDarkMode 
              ? 'bg-stone-950/40 border-stone-850 hover:border-stone-800' 
              : 'bg-[#fbfbf6]/60 border-[#1e251a]/10 hover:border-[#1e251a]/20'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className={`text-[10px] font-mono uppercase tracking-wider ${labelColor}`}>
                  Corporate Representative
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    disabled={status === 'submitting'}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs font-semibold outline-none border transition-all ${inputBg} ${inputTextColor}`}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className={`text-[10px] font-mono uppercase tracking-wider ${labelColor}`}>
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    disabled={status === 'submitting'}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs font-semibold outline-none border transition-all ${inputBg} ${inputTextColor}`}
                  />
                </div>
              </div>
            </div>

            {/* Inquiry Type Dropdown */}
            <div className="flex flex-col gap-2">
              <label className={`text-[10px] font-mono uppercase tracking-wider ${labelColor}`}>
                Ecosystem Parameter
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full px-4 py-3 rounded-xl text-xs font-semibold outline-none border transition-all appearance-none cursor-pointer ${inputBg} ${inputTextColor}`}
              >
                <option value="EOR Consultation">Global Employer of Record (EOR) Consultation</option>
                <option value="Payroll System Support">Global Payroll Architecture Setup</option>
                <option value="Custom Contract Verification">Statutory Contract Verification</option>
                <option value="General Queries">General Ecosystem Query</option>
              </select>
            </div>

            {/* Message/Inquiry details */}
            <div className="flex flex-col gap-2">
              <label className={`text-[10px] font-mono uppercase tracking-wider ${labelColor}`}>
                Statutory/Technical Details
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details of your global scaling plans or integration inquiry..."
                  disabled={status === 'submitting'}
                  rows={4}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs font-semibold outline-none border transition-all resize-none ${inputBg} ${inputTextColor}`}
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-250 cursor-pointer flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-white hover:bg-stone-200 text-stone-950 disabled:bg-stone-800 disabled:text-stone-600'
                    : 'bg-stone-950 hover:bg-stone-800 text-white disabled:bg-stone-200 disabled:text-stone-400'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Lock Parameters
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Status Indicator */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs font-medium text-emerald-500 flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    {statusMsg}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs font-medium text-rose-500 flex items-center gap-1.5"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {statusMsg}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
