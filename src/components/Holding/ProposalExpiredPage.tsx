import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react';

export const ProposalExpiredPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [feedbackNotice, setFeedbackNotice] = useState<string | null>(null);

  useEffect(() => {
    // Set document title and SEO meta dynamically
    if (typeof document !== 'undefined') {
      document.title = 'Proposal Review Period Closed — JORMASS | OnlineFirst Studio';

      // Ensure noindex, nofollow robots tag is present
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    }
  }, []);

  const contactEmail = 'onlinefirst2026@gmail.com';
  const emailSubject = 'JORMASS Proposal Reactivation Request';
  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}`;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(emailSubject)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setFeedbackNotice('Email address copied to clipboard');
      setTimeout(() => {
        setCopied(false);
        setFeedbackNotice(null);
      }, 3500);
    } catch {
      // Fallback for sandboxed iframes where clipboard API may be restricted
      const textarea = document.createElement('textarea');
      textarea.value = contactEmail;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setFeedbackNotice('Email address copied to clipboard');
      setTimeout(() => {
        setCopied(false);
        setFeedbackNotice(null);
      }, 3500);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // In sandboxed iframes or browser environments, standard navigation to mailto
    // is blocked by the browser. Explicitly opening a new window ensures the OS
    // or browser protocol handler activates.
    try {
      const mailWin = window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
      if (mailWin) {
        setTimeout(() => {
          try {
            if (!mailWin.closed) mailWin.close();
          } catch {
            // ignore
          }
        }, 800);
      }
      setFeedbackNotice('Opening your default email app...');
      setTimeout(() => setFeedbackNotice(null), 4000);
    } catch {
      // Direct window location fallback
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#08101C] text-[#F5FAFF] font-sans flex flex-col justify-between overflow-hidden selection:bg-[#35D6FF]/20 selection:text-[#35D6FF]">
      {/* 1. Subtle Background Grid & Ambient AI / Midnight Atmosphere */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {/* Midnight steel gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1524] via-[#0E1A2B] to-[#070D18]" />

        {/* Blueprint architectural grid & subtle dot matrix */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-60" />
        <div className="absolute inset-0 bg-dot-matrix opacity-35" />

        {/* Subtle cyan & deep navy orbital glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-[#35D6FF]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-150px] right-1/4 w-[600px] h-[500px] bg-[#20255C]/35 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle geometric grid arcs SVG */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] opacity-[0.04] stroke-[#35D6FF] pointer-events-none"
          fill="none"
          viewBox="0 0 1100 750"
        >
          <ellipse cx="550" cy="375" rx="500" ry="320" strokeWidth="1" strokeDasharray="8 8" />
          <ellipse cx="550" cy="375" rx="360" ry="220" strokeWidth="1" />
          <ellipse cx="550" cy="375" rx="200" ry="120" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* 2. Top Header Navigation / Brand Badge */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#14263D] to-[#0E1A2B] border border-[#35D6FF]/30 shadow-lg shadow-[#35D6FF]/5">
            <span className="font-heading text-base font-bold text-[#35D6FF]">OF</span>
          </div>
          <div>
            <span className="block text-sm font-semibold tracking-tight text-[#F5FAFF]">
              OnlineFirst Studio
            </span>
            <span className="block text-[11px] font-mono text-[#8FA4BC] tracking-wider uppercase">
              Academic Systems Engineering
            </span>
          </div>
        </div>

        {/* Hub Badge Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14263D]/80 border border-[#35D6FF]/25 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D6FF]/70" />
          <span className="font-mono text-xs font-semibold tracking-widest text-[#7BE7FF] uppercase">
            ONLINEFIRST HUB
          </span>
        </div>
      </header>

      {/* 3. Main Center Content — Business Status Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main Card */}
          <div
            id="proposal-expired-card"
            className="rounded-2xl border border-[#223753] bg-[#0E1A2B]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl shadow-black/40 text-center space-y-8"
          >
            {/* Context Sub-Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14263D] border border-[#2B4365] text-[#9FB3C8] text-xs font-medium tracking-wide">
              <span>JORMASS Website Redesign Proposal</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5FAFF] leading-snug">
                Proposal Review Period Closed
              </h1>
              <div className="w-12 h-0.5 bg-[#35D6FF]/40 mx-auto rounded-full" />
            </div>

            {/* Structured Page Body Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#B7C6D8] leading-relaxed max-w-xl mx-auto text-center font-normal">
              <p>
                Thank you for reviewing the JORMASS website redesign proposal from OnlineFirst Studio.
              </p>
              <p>
                The proposal review period has now ended, and access to the design concepts and commercial proposal has been temporarily closed.
              </p>
              <p>
                If JORMASS would like to reopen the proposal, request additional time, or continue the discussion, please contact OnlineFirst Studio.
              </p>
            </div>

            {/* Primary Action Button & Direct Options */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  id="contact-onlinefirst-button"
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#35D6FF] hover:bg-[#56E0FF] text-[#071322] font-semibold text-sm sm:text-base px-8 py-3.5 shadow-[0_0_25px_rgba(53,214,255,0.25)] hover:shadow-[0_0_35px_rgba(53,214,255,0.4)] transition duration-200 cursor-pointer min-h-[48px]"
                >
                  <Mail className="h-4 w-4 text-[#071322]" />
                  <span>Contact OnlineFirst</span>
                  <ArrowUpRight className="h-4 w-4 text-[#071322]/70" />
                </a>

                {/* Direct Gmail Webmail Action (Ideal for browser & webmail users) */}
                <a
                  id="open-in-gmail-button"
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#2B4365] bg-[#14263D] hover:bg-[#1C3352] text-[#D8E8F8] hover:text-[#FFFFFF] text-xs sm:text-sm font-medium px-5 py-3.5 transition duration-150 cursor-pointer min-h-[48px]"
                >
                  <span>Open in Gmail</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#35D6FF]" />
                </a>

                {/* Direct One-Click Copy Button */}
                <button
                  id="copy-email-button"
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#2B4365] bg-[#14263D] hover:bg-[#1C3352] text-[#D8E8F8] hover:text-[#FFFFFF] text-xs sm:text-sm font-medium px-5 py-3.5 transition duration-150 cursor-pointer min-h-[48px]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[#8FA4BC]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant Interactive Feedback Banner */}
              {feedbackNotice && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#35D6FF]/10 border border-[#35D6FF]/30 text-xs font-mono text-[#7BE7FF]">
                  <Check className="h-3.5 w-3.5 text-[#35D6FF]" />
                  <span>{feedbackNotice}</span>
                </div>
              )}
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-[#1C2E46] pt-6" />

            {/* Contact Details & Organization Branding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left p-4 rounded-xl bg-[#14263D]/60 border border-[#223753]">
              <div className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#8FA4BC]">
                  Contact
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleContactClick}
                    className="inline-block text-xs sm:text-sm font-mono font-medium text-[#7BE7FF] hover:text-[#A6EFFF] underline underline-offset-2 transition"
                  >
                    {contactEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-1 rounded hover:bg-[#223753] text-[#8FA4BC] hover:text-[#7BE7FF] transition cursor-pointer"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1 sm:text-right">
                <span className="block text-xs font-semibold text-[#F5FAFF]">
                  OnlineFirst Studio
                </span>
                <span className="block text-xs text-[#8FA4BC]">
                  Digital solutions for modern organisations
                </span>
              </div>
            </div>

            {/* Subtle Status Line */}
            <div className="pt-1">
              <p className="text-xs font-mono text-[#6A819B] tracking-wider">
                Proposal status: <span className="text-[#8FA4BC] font-semibold">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Minimal Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 text-center text-xs font-mono text-[#6A819B]">
        <p>© {new Date().getFullYear()} OnlineFirst Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};
