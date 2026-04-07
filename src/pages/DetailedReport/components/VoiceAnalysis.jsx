const VoiceAnalysis = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary" data-icon="graphic_eq">graphic_eq</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-headline">목소리 분석</h2>
        </div>
        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">REAL-TIME DATA</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Speed Indicator */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Speaking Speed</span>
              <p className="text-lg font-bold font-headline">120 <span className="text-sm font-medium text-slate-500 font-body">WPM</span></p>
            </div>
            <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">IDEAL</span>
          </div>
          <div className="relative h-24 flex items-end gap-1 px-2">
            {/* Mock Graph Bars */}
            <div className="w-full bg-secondary/10 h-12 rounded-t-sm"></div>
            <div className="w-full bg-secondary/20 h-16 rounded-t-sm"></div>
            <div className="w-full bg-secondary/40 h-20 rounded-t-sm"></div>
            <div className="w-full bg-secondary/60 h-14 rounded-t-sm"></div>
            <div className="w-full bg-secondary h-24 rounded-t-sm"></div>
            <div className="w-full bg-secondary/80 h-18 rounded-t-sm"></div>
            <div className="w-full bg-secondary/50 h-12 rounded-t-sm"></div>
            <div className="w-full bg-secondary/30 h-10 rounded-t-sm"></div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center italic">안정적인 발화 속도를 유지하고 있습니다.</p>
        </div>
        {/* Pitch Indicator */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Pitch Variation</span>
              <p className="text-lg font-bold font-headline">240 <span className="text-sm font-medium text-slate-500 font-body">Hz</span></p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">STABLE</span>
          </div>
          <div className="relative h-24 flex items-center">
            <div className="w-full h-0.5 bg-slate-100 absolute top-1/2 -translate-y-1/2"></div>
            <svg className="w-full h-16 relative z-10" viewBox="0 0 200 60">
              <path className="opacity-60" d="M0,30 C20,5 40,55 60,30 C80,5 100,25 120,30 C140,35 160,10 180,30 C200,50 220,30 240,30" fill="none" stroke="#0D99FF" strokeWidth="2"></path>
              <path d="M0,30 C20,15 40,45 60,30 C80,15 100,30 120,30 C140,30 160,20 180,30" fill="none" stroke="#0D99FF" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center italic">톤의 변화가 자연스러워 집중력을 높입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default VoiceAnalysis;
