import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative">
      <div className="bg-card rounded-2xl border border-primary/30 px-6 py-5 overflow-hidden relative">
        {/* Decorative left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-danger" />
        {/* Decorative right accent bar */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-danger via-danger to-primary" />

        <div className="flex items-center justify-center gap-4">
          {/* Badge icon */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-danger/20 border-2 border-primary/40 flex items-center justify-center">
              <Shield size={22} className="text-primary" />
            </div>
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-glow-pulse" />
          </div>

          {/* Department name */}
          <div className="text-center">
            <div className="font-serif italic font-bold leading-tight tracking-wide">
              <span className="block text-xl text-danger">Oxar Police <span className="text-primary">Department</span></span>
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-1.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary">MDT</span>
              <span className="text-slate-600 text-xs">/</span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-danger">IMPOUND</span>
            </div>
          </div>

          {/* Badge icon right */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-danger/20 to-primary/20 border-2 border-danger/40 flex items-center justify-center">
              <Shield size={22} className="text-danger" />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-4 pt-3 border-t border-card-border flex items-center justify-center gap-4 text-[9px] font-mono tracking-wider text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span>·</span>
          <span>SECURE CHANNEL</span>
          <span>·</span>
          <span>LSPD v2.0</span>
        </div>
      </div>
    </header>
  );
}
