import { Copy, Check, Trash2, FileText, ClipboardList } from 'lucide-react';

interface ReportOutputProps {
  output: string;
  onCopy: () => void;
  onClear: () => void;
  copied: boolean;
}

export default function ReportOutput({ output, onCopy, onClear, copied }: ReportOutputProps) {
  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Generated Record Output
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClear}
            disabled={!output}
            className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold rounded-lg border border-card-border bg-card text-slate-400 hover:text-danger hover:border-danger/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Trash2 size={13} />
            CLEAR
          </button>
          <button
            onClick={onCopy}
            disabled={!output.trim()}
            className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold rounded-lg border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${
              copied
                ? 'border-accent-green/40 bg-accent-green/10 text-accent-green'
                : 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60'
            }`}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>
      </div>

      <div className="relative group">
        {/* Window chrome bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#06080c] border border-card-border border-b-0 rounded-t-xl">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-danger/70" />
            <div className="w-3 h-3 rounded-full bg-accent-gold/70" />
            <div className="w-3 h-3 rounded-full bg-accent-green/70" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] font-mono text-slate-600 tracking-wider">
              lspd_record_output.txt
            </span>
          </div>
          <FileText size={13} className="text-slate-600" />
        </div>

        {/* Terminal textarea */}
        <div className="relative">
          <textarea
            readOnly
            value={output}
            placeholder=" "
            className="w-full h-64 resize-y bg-[#06080c] text-primary-light border border-card-border rounded-b-xl p-4 font-mono text-sm leading-relaxed text-left outline-none focus:border-primary/40 transition-colors"
            dir="ltr"
          />
          {!output && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <ClipboardList size={40} className="text-slate-700 mb-2" />
              <span className="text-[11px] text-slate-600 font-mono">No record generated yet</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
