import { Car, FileText } from 'lucide-react';
import type { TabKey } from '../types';

interface TabNavProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

export default function TabNav({ active, onChange }: TabNavProps) {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode; accent: string }[] = [
    {
      key: 'impound',
      label: 'IMPOUND',
      icon: <Car size={16} />,
      accent: 'danger',
    },
    {
      key: 'mdt',
      label: 'MDT',
      icon: <FileText size={16} />,
      accent: 'primary',
    },
  ];

  return (
    <nav className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 border ${
              isActive
                ? tab.accent === 'danger'
                  ? 'bg-danger/15 border-danger/50 text-danger shadow-lg shadow-danger/10'
                  : 'bg-primary/15 border-primary/50 text-primary shadow-lg shadow-primary/10'
                : 'bg-card border-card-border text-slate-500 hover:text-slate-300 hover:border-primary/20'
            }`}
          >
            {tab.icon}
            {tab.label}
            <span className={`text-[10px] font-mono ${isActive ? 'opacity-70' : 'opacity-40'}`}>
              {tab.key === 'impound' ? '01' : '02'}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
