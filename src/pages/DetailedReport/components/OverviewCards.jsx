const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Overall Score</span>
        <span className="text-4xl font-black text-primary font-headline">92<span className="text-lg text-slate-300 ml-1">/100</span></span>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Confidence</span>
        <span className="text-4xl font-black text-secondary font-headline">A+</span>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Attitude</span>
        <span className="text-4xl font-black text-tertiary font-headline">95%</span>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Speech Clarity</span>
        <span className="text-4xl font-black text-on-surface font-headline">Very High</span>
      </div>
    </div>
  );
};

export default OverviewCards;
