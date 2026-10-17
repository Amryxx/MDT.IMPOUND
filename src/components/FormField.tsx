import { useState } from 'react';

interface FormFieldProps {
  label: string;
  labelAr?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

export default function FormField({ label, labelAr, value, onChange, placeholder, icon }: FormFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-2">
        <label
          className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 ${
            focused ? 'text-primary' : 'text-slate-500'
          }`}
        >
          {icon}
          {label}
        </label>
        {labelAr && (
          <span className="text-[9px] text-slate-600 tracking-wider uppercase">{labelAr}</span>
        )}
      </div>
      <div
        className={`relative rounded-xl transition-all duration-200 ${
          focused ? 'ring-2 ring-primary/30 ring-offset-0' : ''
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl bg-input border transition-all duration-200 text-right text-sm text-white outline-none ${
            focused ? 'border-primary bg-input-focus' : 'border-card-border hover:border-primary/30'
          }`}
          dir="rtl"
        />
      </div>
    </div>
  );
}
