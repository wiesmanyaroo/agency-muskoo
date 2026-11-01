'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface LandBankingCalculatorProps {
  onOpenInspection?: () => void;
}

const NIGERIA_CORRIDORS = [
  {
    id: 'corridor-uniabuja',
    name: 'Gwagwalada UniAbuja & Teaching Hospital Axis',
    annualRate: 0.42,
    riskRating: 'AAA High Growth Corridor',
    title: 'FCDA R of O / AGIS Stamped',
    description: 'Surrounded by student hostels, medical personnel residences, and master-planned layouts.'
  },
  {
    id: 'corridor-giri',
    name: 'Giri Junction & Airport Expressway Interchange',
    annualRate: 0.48,
    riskRating: 'AAA Prime Commercial & Logistics',
    title: 'AGIS Recertified Area Council Allocation',
    description: '18 mins to Nnamdi Azikiwe International Airport; massive influx of commercial logistics hubs.'
  },
  {
    id: 'corridor-dobi',
    name: 'Dobi Outer Ring & Agro-Logistics Corridor',
    annualRate: 0.55,
    riskRating: 'A+ High Capital Appreciation Catalyst',
    title: 'Certificate of Occupancy (C of O)',
    description: 'Rapid industrial and warehousing expansion with 200%+ projected land appreciation over 3 years.'
  }
];

export default function LandBankingCalculator({ onOpenInspection }: LandBankingCalculatorProps) {
  const [investmentNaira, setInvestmentNaira] = useState<number>(10000000);
  const [holdingPeriodYears, setHoldingPeriodYears] = useState<number>(2);
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>(NIGERIA_CORRIDORS[0].id);

  const activeCorridor = NIGERIA_CORRIDORS.find((c) => c.id === selectedCorridorId) || NIGERIA_CORRIDORS[0];

  const projectedFutureValNaira = Math.round(
    investmentNaira * Math.pow(1 + activeCorridor.annualRate, holdingPeriodYears)
  );
  const netCapitalGrowthNaira = projectedFutureValNaira - investmentNaira;
  const percentageGain = Math.round(((projectedFutureValNaira - investmentNaira) / investmentNaira) * 100);

  return (
    <div className="bg-[#022451] border border-[#083B7A] rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ECB209]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#083B7A]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#083B7A]">
        <div>
          <div className="flex items-center gap-2 text-[#ECB209] font-mono text-[11px] tracking-widest uppercase mb-2">
            <Calculator size={15} />
            <span>FCT Abuja Investor Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal">
            Gwagwalada Land Banking <em className="italic text-[#F5BE42]">ROI Simulator</em>
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-xl">
            Simulate your capital preservation and wealth accumulation across authenticated Gwagwalada, Abuja growth corridors with guaranteed contractual buyback options.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#011736] border border-[#083B7A] text-xs font-mono text-slate-300">
          <ShieldCheck size={18} className="text-[#ECB209]" />
          <span>AGIS &amp; FCDA Registered Titles with 100% Guaranteed Soil</span>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8">
        {/* Left: Input Parameters (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Investment Amount */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono tracking-wider uppercase text-slate-300">
                1. Initial Land Capital Allocation (₦)
              </label>
              <div className="font-mono text-sm sm:text-base font-bold text-[#F5BE42] bg-[#011736] px-3.5 py-1 rounded-lg border border-[#083B7A]">
                ₦ {investmentNaira.toLocaleString()}
              </div>
            </div>

            <input
              type="range"
              min={2000000}
              max={100000000}
              step={1000000}
              value={investmentNaira}
              onChange={(e) => setInvestmentNaira(Number(e.target.value))}
              className="w-full h-2 bg-[#083B7A] rounded-lg appearance-none cursor-pointer accent-[#ECB209]"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
              <span>₦ 2M (1 Plot)</span>
              <span>₦ 10M (Multi-Plot)</span>
              <span>₦ 35M (1-2 Acres)</span>
              <span>₦ 100M (Commercial Block)</span>
            </div>

            {/* Quick presets */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                { label: '₦ 3.5M (1 Plot)', value: 3500000 },
                { label: '₦ 10M (Multi-Plot)', value: 10000000 },
                { label: '₦ 25M (Acre Reserve)', value: 25000000 },
                { label: '₦ 60M (Commercial)', value: 60000000 }
              ].map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setInvestmentNaira(preset.value)}
                  className={`text-xs px-3 py-1 rounded-md border font-mono transition-all ${
                    investmentNaira === preset.value
                      ? 'bg-[#ECB209] text-[#022451] border-[#ECB209] font-semibold'
                      : 'bg-[#011736] text-slate-300 border-[#083B7A] hover:border-[#ECB209]/50'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Holding Period */}
          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-3">
              2. Planned Holding Horizon (Tenure)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { years: 1, label: '12 Months', note: 'Fast Infrastructure Infill' },
                { years: 2, label: '24 Months', note: 'Standard Master-Plan Cycle' },
                { years: 3, label: '36 Months', note: 'Maximum Compound Appreciation' }
              ].map((tenure) => (
                <button
                  key={tenure.years}
                  type="button"
                  onClick={() => setHoldingPeriodYears(tenure.years)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    holdingPeriodYears === tenure.years
                      ? 'bg-[#083B7A] border-[#ECB209] text-white shadow-md'
                      : 'bg-[#011736] border-[#083B7A] text-slate-300 hover:border-[#ECB209]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm font-semibold text-white">
                      {tenure.label}
                    </span>
                    {holdingPeriodYears === tenure.years && (
                      <Check size={14} className="text-[#ECB209]" />
                    )}
                  </div>
                  <span className="block text-[10px] text-slate-400 mt-1 leading-tight">
                    {tenure.note}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Corridor Selection */}
          <div>
            <label className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-3">
              3. Select Gwagwalada, Abuja Growth Corridor
            </label>
            <div className="space-y-2.5">
              {NIGERIA_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.id}
                  onClick={() => setSelectedCorridorId(corridor.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedCorridorId === corridor.id
                      ? 'bg-[#083B7A] border-[#ECB209]'
                      : 'bg-[#011736] border-[#083B7A] hover:border-[#ECB209]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-serif font-medium text-white">
                        {corridor.name}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#022451] text-[#F5BE42] border border-[#083B7A]">
                        {corridor.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{corridor.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-3">
                    <span className="font-mono text-sm font-bold text-[#F5BE42] block">
                      +{(corridor.annualRate * 100).toFixed(0)}%/yr
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-500">
                      {corridor.riskRating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Output Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#011736] border border-[#083B7A] shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#083B7A]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Simulation Projection
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#083B7A] text-[#F5BE42] flex items-center gap-1.5 border border-[#083B7A]">
                <TrendingUp size={13} />
                <span>Compound Yield</span>
              </span>
            </div>

            {/* Big Output */}
            <div>
              <span className="text-xs text-slate-400 block font-mono">
                Projected Land Valuation:
              </span>
              <div className="text-2xl sm:text-3xl font-serif font-normal text-white mt-1">
                ₦ {projectedFutureValNaira.toLocaleString()}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-mono font-bold text-[#F5BE42] bg-[#ECB209]/15 border border-[#ECB209]/30 px-2 py-0.5 rounded">
                  +{percentageGain}% Total Return
                </span>
                <span className="text-xs text-slate-400">
                  over {holdingPeriodYears} {holdingPeriodYears === 1 ? 'year' : 'years'}
                </span>
              </div>
            </div>

            {/* Breakdown stats */}
            <div className="space-y-2.5 p-4 rounded-xl bg-[#022451] border border-[#083B7A] text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Initial Capital:</span>
                <span className="text-white">₦ {investmentNaira.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Net Capital Appreciation:</span>
                <span className="text-[#F5BE42] font-bold">+₦ {netCapitalGrowthNaira.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Title Verification:</span>
                <span className="text-[#F5BE42]">{activeCorridor.title}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Guaranteed Buyback:</span>
                <span className="text-white">Contractual at Month {holdingPeriodYears * 12}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              *Projections are calibrated to verified FCT Gwagwalada land value appreciation recorded in active university and dual-carriageway expansion zones.
            </p>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-[#083B7A]">
            <button
              type="button"
              onClick={onOpenInspection}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D4A008] hover:to-[#E8AD10] text-[#022451] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#ECB209]/20 transition-all hover:scale-[1.01]"
            >
              <span>Book Gwagwalada Inspection &amp; Prospectus</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
