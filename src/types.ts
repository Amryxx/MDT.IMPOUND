export type TabKey = 'impound' | 'mdt';

export interface ImpoundReport {
  badge: string;
  vehicle: string;
  name: string;
}

export interface MdtReport {
  crime: string;
  units: string;
  official: string;
  criminal: string;
  prohibited: string;
}
