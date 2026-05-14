import React from 'react';
import { ArrowLeftIcon, BookOpenIcon, ExternalLinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DemoBanner() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/#aletu-demo');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-amber-500/30 shadow-lg shadow-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Left: Exit button */}
        <button
          onClick={handleExit}
          className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium shrink-0"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Exit Demo</span>
        </button>

        {/* Center: Demo label */}
        <div className="flex items-center gap-2 text-sm text-white/80">
          <BookOpenIcon className="h-4 w-4 text-indigo-400 shrink-0" />
          <span className="font-semibold text-indigo-300">ALETU</span>
          <span className="hidden sm:inline text-white/50">—</span>
          <span className="hidden sm:inline text-white/60">
            Live MVP demo built by{' '}
            <span className="text-amber-400 font-medium">Granville-Tech</span>
          </span>
          <span className="inline sm:hidden text-white/50 text-xs">Demo by Granville-Tech</span>
        </div>

        {/* Right: Badge */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Student Demo
          </span>
        </div>
      </div>
    </div>
  );
}
