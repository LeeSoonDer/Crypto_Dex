import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cryptos } from '../data/cryptos';
import { PixelCard } from '../components/ui';
import { Search, X, Filter, Database } from 'lucide-react';
import { CryptoType } from '../types';

export const Dex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [filterType, setFilterType] = useState<CryptoType | 'All'>((searchParams.get('type') as any) || 'All');
  const [filterRisk, setFilterRisk] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('active');
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    const params: any = {};
    if (search) params.q = search;
    if (filterType !== 'All') params.type = filterType;
    setSearchParams(params, { replace: true });
  }, [search, filterType, setSearchParams]);

  const filtered = useMemo(() => {
    return cryptos.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.symbol.toLowerCase().includes(search.toLowerCase());
      const matchesType = filterType === 'All' || c.type === filterType;
      const matchesRisk = filterRisk === 'All' || c.riskLevel === filterRisk;
      const matchesStatus = filterStatus === 'All' ? true : c.status === filterStatus;
      return matchesSearch && matchesType && matchesRisk && matchesStatus;
    });
  }, [search, filterType, filterRisk, filterStatus]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [search, filterType, filterRisk, filterStatus]);

  const types: (CryptoType | 'All')[] = ['All', 'Layer 1', 'Layer 2', 'DeFi', 'Meme', 'Stablecoin', 'AI', 'Gaming', 'Privacy', 'Infrastructure'];

  return (
    <div className="max-w-7xl mx-auto pb-12">
      
      {/* HEADER */}
      <div className="flex items-end justify-between mb-8 border-b border-space-700 pb-4">
        <div>
          <h1 className="font-retro text-2xl md:text-4xl text-white mb-2 flex items-center gap-3">
            <Database className="text-pixel-cyan" />
            CRYPTO<span className="text-pixel-purple">DEX</span>
          </h1>
          <p className="font-terminal text-xl text-gray-400">
            ACCESSING GLOBAL DATABASE...
          </p>
        </div>
        <div className="hidden md:block text-right">
           <div className="font-terminal text-pixel-cyan text-lg">ENTRIES: {filtered.length}</div>
           <div className="font-terminal text-gray-600 text-sm">STATUS: CONNECTED</div>
        </div>
      </div>

      {/* CONTROL PANEL */}
      <div className="bg-space-900 border-2 border-space-700 p-6 mb-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-pixel-cyan"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Search */}
          <div className="lg:col-span-1 relative group">
            <label className="font-retro text-[0.6rem] text-pixel-cyan mb-2 block uppercase tracking-widest">Search Query</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-space-700 group-focus-within:text-pixel-cyan w-5 h-5" />
              <input 
                type="text"
                placeholder="BTC, ETH..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-space-950 border border-space-700 text-white font-terminal text-xl py-2 pl-10 pr-4 focus:border-pixel-cyan focus:outline-none uppercase placeholder:text-space-800"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-pixel-red hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex flex-col">
            <label className="font-retro text-[0.6rem] text-pixel-purple mb-2 block uppercase tracking-widest">Category</label>
            <select 
              value={filterType} 
              onChange={e => setFilterType(e.target.value as any)}
              className="bg-space-950 text-white font-terminal text-lg border border-space-700 px-3 py-2 focus:border-pixel-purple outline-none uppercase hover:bg-space-900 cursor-pointer"
            >
              {types.map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
            </select>
          </div>

          {/* Risk Filter */}
           <div className="flex flex-col">
            <label className="font-retro text-[0.6rem] text-pixel-yellow mb-2 block uppercase tracking-widest">Risk Factor</label>
            <select 
              value={filterRisk} 
              onChange={e => setFilterRisk(e.target.value)}
              className="bg-space-950 text-white font-terminal text-lg border border-space-700 px-3 py-2 focus:border-pixel-yellow outline-none uppercase hover:bg-space-900 cursor-pointer"
            >
              <option value="All">ANY</option>
              <option value="Low">LOW (SAFE)</option>
              <option value="Medium">MEDIUM</option>
              <option value="High">HIGH</option>
              <option value="Extreme">EXTREME</option>
            </select>
          </div>

           {/* Status Filter */}
           <div className="flex flex-col">
            <label className="font-retro text-[0.6rem] text-gray-400 mb-2 block uppercase tracking-widest">Network Status</label>
            <select 
              value={filterStatus} 
              onChange={e => setFilterStatus(e.target.value)}
              className="bg-space-950 text-white font-terminal text-lg border border-space-700 px-3 py-2 focus:border-white outline-none uppercase hover:bg-space-900 cursor-pointer"
            >
              <option value="active">ACTIVE</option>
              <option value="inactive">GRAVEYARD (DEAD)</option>
              <option value="All">ALL RECORDS</option>
            </select>
          </div>
        </div>
      </div>

      {/* GRID */}
      {paginated.length === 0 ? (
        <div className="border-2 border-dashed border-space-700 p-12 text-center bg-space-900/50 rounded-lg">
          <Filter className="w-12 h-12 text-space-700 mx-auto mb-4" />
          <p className="font-retro text-gray-500 text-sm">NO DATA FOUND.</p>
          <p className="font-terminal text-gray-600 mt-2">ADJUST FILTERS TO RETRIEVE RECORDS.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {paginated.map((c, idx) => (
            // Added key={c.id} for React consistency, but also added animation class
            <div 
              key={c.id} 
              className="h-64 animate-card-entry"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Calculate global index for the #001 badge */}
              <PixelCard crypto={c} index={cryptos.findIndex(item => item.id === c.id)} />
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-6 items-center font-retro text-xs mt-8">
          <button 
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-4 py-2 border-2 border-space-700 bg-space-900 text-white hover:border-pixel-cyan hover:text-pixel-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            PREV
          </button>
          <span className="text-pixel-cyan font-terminal text-xl">PAGE {page} / {totalPages}</span>
          <button 
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 border-2 border-space-700 bg-space-900 text-white hover:border-pixel-cyan hover:text-pixel-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
};