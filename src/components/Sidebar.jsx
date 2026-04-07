const Sidebar = () => {
  const path = window.location.pathname;

  const isMain = path === '/';
  const isDashboard = path === '/dashboard';
  const isReport = path === '/report';
  const isHistory = path === '/history';
  const isFeedbackOpen = isDashboard || isReport || isHistory; // Add more conditions later for other feedback pages

  const isCommunity = path === '/community';

  return (
    <aside className="hidden lg:flex flex-col gap-2 px-4 py-6 h-screen w-64 fixed left-0 top-0 pt-24 bg-slate-50 dark:bg-slate-950 z-40 border-r border-slate-100 dark:border-slate-800">
      <nav className="space-y-1">
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm font-semibold ${isMain ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1'}`}
          href="/"
        >
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span>메인</span>
        </a>

        <div>
          <a
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm font-semibold ${isFeedbackOpen ? 'bg-white dark:bg-slate-800 text-[#0D99FF] shadow-sm mb-1' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1'}`}
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span>피드백 관리</span>
          </a>

          <div className="ml-9 mt-1 space-y-1">
            <a
              className={`block px-4 py-2 transition-colors cursor-pointer ${isDashboard ? 'text-sm font-bold text-[#0D99FF] bg-gradient-to-r from-blue-50 dark:from-blue-900/30 to-transparent rounded-r-lg border-l-2 border-[#0D99FF]' : 'text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0D99FF] border-l-2 border-transparent'}`}
              onClick={() => window.location.href = '/dashboard'}
            >
              대시보드
            </a>
            <a
              className={`block px-4 py-2 transition-colors cursor-pointer ${isReport ? 'text-sm font-bold text-[#0D99FF] bg-gradient-to-r from-blue-50 dark:from-blue-900/30 to-transparent rounded-r-lg border-l-2 border-[#0D99FF]' : 'text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0D99FF] border-l-2 border-transparent'}`}
              onClick={() => window.location.href = '/report'}
            >
              상세 분석 리포트
            </a>
            <a
              className={`block px-4 py-2 transition-colors cursor-pointer ${isHistory ? 'text-sm font-bold text-[#0D99FF] bg-gradient-to-r from-blue-50 dark:from-blue-900/30 to-transparent rounded-r-lg border-l-2 border-[#0D99FF]' : 'text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#0D99FF] border-l-2 border-transparent'}`}
              onClick={() => window.location.href = '/history'}
            >
              히스토리
            </a>
          </div>
        </div>

        <a
          className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl transition-all duration-200 font-headline text-sm font-semibold ${isCommunity ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1'}`}
          onClick={() => window.location.href = '/community'}
        >
          <span className="material-symbols-outlined" data-icon="group" style={{ fontVariationSettings: isCommunity ? "'FILL' 1" : undefined }}>group</span>
          <span>커뮤니티</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-semibold" href="#">
          <span className="material-symbols-outlined" data-icon="work">work</span>
          <span>채용정보</span>
        </a>
      </nav>

      <div className="mt-auto p-4 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700">
        <p className="text-xs font-bold text-[#0D99FF] mb-2">오늘의 코칭 목표</p>
        <div className="w-full bg-white dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
          <div className="bg-[#0D99FF] h-full" style={{ width: "75%" }}></div>
        </div>
        <p className="text-[10px] mt-2 text-on-surface-variant font-medium">3회 중 2회 완료</p>
      </div>
    </aside>
  );
};

export default Sidebar;