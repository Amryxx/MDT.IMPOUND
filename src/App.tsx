import { useState } from 'react';
import { Shield, Check } from 'lucide-react';
import Header from './components/Header';
import TabNav from './components/TabNav';
import ReportForms from './components/ReportForms';
import ReportOutput from './components/ReportOutput';
import type { TabKey } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('impound');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    const text = output.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleClear = () => {
    setOutput('');
  };

  return (
    <div className="scanlines min-h-screen bg-bg-deep text-white font-sans relative" dir="rtl">
      {/* Background grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Radial glow at top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 md:py-12">
        {/* Top brand bar */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Shield size={14} className="text-primary" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-slate-600 uppercase">
            LSPD Records System
          </span>
          <Shield size={14} className="text-danger" />
        </div>

        <Header />

        <div className="mt-6">
          <TabNav active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="mt-6">
          <ReportForms activeTab={activeTab} onOutput={setOutput} />
        </div>

        <div className="mt-6">
          <ReportOutput
            output={output}
            onCopy={handleCopy}
            onClear={handleClear}
            copied={copied}
          />
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-base md:text-lg font-mono font-bold tracking-[0.25em] text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              BY AMRYX
            </span>
            <div className="h-px w-16 bg-danger/40" />
          </div>
        </footer>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2.5 bg-card border border-accent-green/30 rounded-xl px-5 py-3 shadow-2xl shadow-accent-green/10">
          <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
            <Check size={13} className="text-accent-green" />
          </div>
          <span className="text-sm font-bold text-white">Report copied to clipboard</span>
        </div>
      </div>
    </div>
  );
}

export default App;
