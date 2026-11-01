'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, MapPin, TrendingUp, Calendar, Search, Sparkles } from 'lucide-react';
import { ESTATE_PLOTS, EstatePlot } from '../data/estateData';

interface EstateGridProps {
  onSelectInspection: (estateId: string) => void;
}

export default function EstateGrid({ onSelectInspection }: EstateGridProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'estate-land' | 'land-banking' | 'commercial'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEstates = ESTATE_PLOTS.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.titleDocument.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 md:py-28 px-5 md:px-12 bg-[#F8FAFC] text-slate-800" id="estate-lands">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-[#022451] font-mono text-[11px] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ECB209]" />
              <span className="text-[#022451] font-bold">Verified Abuja Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#022451]">
              Gwagwalada Estates &amp; <em className="italic text-[#ECB209]">Land Reserves</em>
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed">
              Every parcel in our Gwagwalada portfolio has undergone forensic cadastral boundary charting, beacon validation, and 100% legal title perfection with AGIS and the Area Council.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#ECB209]/40 text-xs font-mono text-[#022451] shadow-sm">
            <ShieldCheck size={18} className="text-[#ECB209]" />
            <span className="font-semibold">Guaranteed Zero Customary Encumbrance</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All Portfolios' },
              { id: 'estate-land', label: 'Gated Estate Lands' },
              { id: 'land-banking', label: 'Land Banking Reserves' },
              { id: 'commercial', label: 'Commercial Corridors' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#022451] text-white font-bold shadow-md shadow-[#022451]/20 border border-[#022451]'
                    : 'bg-white text-slate-600 hover:text-[#022451] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search title, corridor, document..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs text-[#022451] rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-[#ECB209] placeholder-slate-400 shadow-sm"
            />
            <Search size={14} className="absolute left-3 top-3 text-slate-400" />
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEstates.map((estate) => (
            <article
              key={estate.id}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-[#ECB209] transition-all hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={estate.image}
                  alt={estate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022451]/80 via-transparent to-transparent" />

                {/* Status Badge */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#022451] text-[#ECB209] border border-[#ECB209]/40 shadow-md font-bold">
                  {estate.status}
                </span>

                {/* Title Document pill */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white/95 text-[#022451] font-mono text-[10px] border border-slate-200 flex items-center gap-1.5 shadow-sm font-semibold">
                    <ShieldCheck size={12} className="text-[#ECB209]" />
                    <span>{estate.titleDocument}</span>
                  </span>
                  <span className="text-[10px] font-mono text-white bg-[#022451]/80 px-2 py-0.5 rounded font-medium">
                    {estate.topography}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1.5">
                    <MapPin size={13} className="text-[#ECB209]" />
                    <span>{estate.location}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#022451] group-hover:text-[#ECB209] transition-colors line-clamp-1">
                    {estate.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {estate.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-500">Available Sizes:</span>
                      <span className="text-[#022451] font-semibold text-right truncate max-w-[170px]">{estate.plotSizes.join(', ')}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-500">Projected Growth:</span>
                      <span className="text-[#022451] font-bold flex items-center gap-1">
                        <TrendingUp size={12} className="text-[#ECB209]" /> {estate.roiProjected}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Official Price
                    </span>
                    <strong className="text-base font-serif font-bold text-[#022451] block">
                      {estate.priceFormatted}
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectInspection(estate.id)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D49918] hover:to-[#EAA812] text-[#022451] font-mono text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#ECB209]/20 flex-shrink-0 hover:scale-[1.02]"
                  >
                    <Calendar size={13} />
                    <span>Book Inspection</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredEstates.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <p className="text-sm text-slate-600">
              No properties matched your search criteria. Try modifying your filter or search query.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
