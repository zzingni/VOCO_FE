const ReportHeader = () => {
  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Analysis Result</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-slate-500 text-sm">Session #1284</span>
        </div>
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight font-headline">토스(Toss) Product Designer</h1>
        <p className="text-on-surface-variant text-lg mt-1 font-medium">2024.05.15 · 45분간의 면접 분석 결과</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white font-bold text-sm hover:bg-slate-50 transition-all">
          <span className="material-symbols-outlined text-lg" data-icon="share">share</span> 공유하기
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          PDF 리포트 다운로드
        </button>
      </div>
    </header>
  );
};

export default ReportHeader;
