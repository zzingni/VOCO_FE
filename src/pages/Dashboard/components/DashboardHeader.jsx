const DashboardHeader = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 w-full max-w-7xl mx-auto md:px-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">voco 대시보드</h1>
        <p className="text-on-surface-variant text-lg">인공지능이 분석한 당신의 면접 성장 리포트입니다.</p>
      </div>
      <button className="flex items-center justify-center gap-2 bg-[#0D99FF] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all active:scale-95">
        <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
        <span>빠른 시작</span>
      </button>
    </header>
  );
};

export default DashboardHeader;
