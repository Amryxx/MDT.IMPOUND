import { useState } from 'react';
import { Car, FileText, User, Hash, AlertTriangle, Users, Shield, Ban, Zap, Loader2 } from 'lucide-react';
import FormField from './FormField';
import type { ImpoundReport, MdtReport } from '../types';
import { generateImpoundReport, generateMdtReport } from '../reportGenerator';

interface ReportFormsProps {
  activeTab: 'impound' | 'mdt';
  onOutput: (output: string) => void;
}

export default function ReportForms({ activeTab, onOutput }: ReportFormsProps) {
  const [impound, setImpound] = useState<ImpoundReport>({ badge: '', vehicle: '', name: '' });
  const [mdt, setMdt] = useState<MdtReport>({ crime: '', units: '', official: '', criminal: '', prohibited: '' });
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      if (activeTab === 'impound') {
        onOutput(generateImpoundReport(impound));
      } else {
        onOutput(generateMdtReport(mdt));
      }
      setGenerating(false);
    }, 600);
  };

  const isImpound = activeTab === 'impound';

  return (
    <div className="bg-card rounded-2xl border border-card-border overflow-hidden animate-scale-in">
      {/* Form header */}
      <div className="px-5 py-4 border-b border-card-border bg-gradient-to-r from-primary/5 to-transparent flex items-center gap-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isImpound ? 'bg-primary/15 text-primary' : 'bg-danger/15 text-danger'}`}>
          {isImpound ? <Car size={18} /> : <FileText size={18} />}
        </div>
        <div>
          <h2 className="text-sm font-bold text-white tracking-wide">
            {isImpound ? 'VEHICLE IMPOUND' : 'MDT INCIDENT REPORT'}
          </h2>
          <p className="text-[10px] text-slate-500 mt-0.5 tracking-wider uppercase">
            Form ID: {isImpound ? 'IMP-2024' : 'MDT-2024'} · LSPD Official
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-danger/10 border border-danger/20">
          <AlertTriangle size={11} className="text-danger" />
          <span className="text-[9px] font-bold text-danger uppercase tracking-wider">Official</span>
        </div>
      </div>

      {/* Form body */}
      <div className="p-5 space-y-4">
        {isImpound ? (
          <>
            <FormField
              label="اكتب اليونت الخاص بك"
              labelAr="Your Badge / Unit"
              value={impound.badge}
              onChange={(v) => setImpound({ ...impound, badge: v })}
              placeholder="e.g. Unit 47..."
              icon={<Shield size={11} />}
            />
            <FormField
              label="الصق لوحة المركبة"
              labelAr="Vehicle Plate Number"
              value={impound.vehicle}
              onChange={(v) => setImpound({ ...impound, vehicle: v })}
              placeholder="e.g. ABC 123..."
              icon={<Hash size={11} />}
            />
            <FormField
              label="اكتب اسم صاحب المركبة"
              labelAr="Vehicle Owner Name"
              value={impound.name}
              onChange={(v) => setImpound({ ...impound, name: v })}
              placeholder="e.g. John Doe..."
              icon={<User size={11} />}
            />
          </>
        ) : (
          <>
            <FormField
              label="اكتب نوع الحالة"
              labelAr="Type of Incident / Crime"
              value={mdt.crime}
              onChange={(v) => setMdt({ ...mdt, crime: v })}
              placeholder="e.g. Grand theft auto..."
              icon={<AlertTriangle size={11} />}
            />
            <FormField
              label="اكتب يونتات المشاركين في الحالة"
              labelAr="Participating Units"
              value={mdt.units}
              onChange={(v) => setMdt({ ...mdt, units: v })}
              placeholder="e.g. Unit 12, Unit 47..."
              icon={<Users size={11} />}
            />
            <FormField
              label="اكتب يونت مسؤول الحالة"
              labelAr="Case Official Unit"
              value={mdt.official}
              onChange={(v) => setMdt({ ...mdt, official: v })}
              placeholder="e.g. Unit 47..."
              icon={<Shield size={11} />}
            />
            <FormField
              label="الصق اسم المجرم"
              labelAr="Criminal Name"
              value={mdt.criminal}
              onChange={(v) => setMdt({ ...mdt, criminal: v })}
              placeholder="e.g. Jane Smith..."
              icon={<User size={11} />}
            />
            <FormField
              label="اكتب مسحوبات المجرم"
              labelAr="Prohibited Items Seized"
              value={mdt.prohibited}
              onChange={(v) => setMdt({ ...mdt, prohibited: v })}
              placeholder="e.g. 1x pistol, 2x knife..."
              icon={<Ban size={11} />}
            />
          </>
        )}
      </div>

      {/* Generate button */}
      <div className="px-5 pb-5">
        <button
          onClick={handleGenerate}
          disabled={generating}
          className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300
            ${isImpound
              ? 'bg-gradient-to-r from-danger to-danger-dark hover:from-danger-light hover:to-danger text-white shadow-lg shadow-danger/20 hover:shadow-danger/30'
              : 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30'
            }
            disabled:opacity-50 disabled:cursor-wait active:scale-[0.98]`}
        >
          {generating ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              GENERATING...
            </>
          ) : (
            <>
              <Zap size={16} />
              {isImpound ? 'GENERATE IMPOUND REPORT' : 'GENERATE MDT REPORT'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
