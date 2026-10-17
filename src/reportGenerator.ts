import type { ImpoundReport, MdtReport } from './types';

function today(): string {
  const d = new Date();
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export function generateImpoundReport(r: ImpoundReport): string {
  return `DESCRIPTION 📄: مركبة مهملة
NAME OF VEHICLE OWNER 🪪: ${r.name}
PLATE NUMBER 🪪: ${r.vehicle}
CASE OFFICIAL 👮🏻: ${r.badge}
TYPE OF CONDITION 💰: Traffic violation
DATE 📅: ${today()}`;
}

export function generateMdtReport(r: MdtReport): string {
  return `DESCRIPTION 📄: ${r.crime}
NAME OF CRIMINAL 🪪: ${r.criminal}
CASE OFFICIAL 👮🏻: ${r.official}
PARTICIPATING UNITS 🚔: ${r.units}
TYPE OF CONDITION 💰: جنائية
LOCATION 📍: Mission Row Police Department
DATE 📅: ${today()}
PROHIBITED ITEMS 🚫: ${r.prohibited}
EVIDENCE 🔎 (And criminal picture):`;
}
