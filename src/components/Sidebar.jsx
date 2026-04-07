const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-2 px-4 py-6 h-screen w-64 fixed left-0 top-0 pt-24 bg-slate-50 dark:bg-slate-950 z-40">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-black text-slate-900 dark:text-white font-headline">voco</h2>
        <p className="text-xs text-slate-500 font-medium">Personal Coach</p>
      </div>
      <nav className="space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl shadow-sm transition-all duration-200 font-headline text-sm font-semibold" href="#">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span>메인</span>
        </a>
        <div>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-semibold" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span>피드백 관리</span>
          </a>
          <div className="ml-9 mt-1 space-y-1">
            <a className="block px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">대시보드</a>
            <a className="block px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">상세 분석 리포트</a>
            <a className="block px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">히스토리</a>
          </div>
        </div>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-semibold" href="#">
          <span className="material-symbols-outlined" data-icon="group">group</span>
          <span>커뮤니티</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl transition-transform duration-200 hover:translate-x-1 font-headline text-sm font-semibold" href="#">
          <span className="material-symbols-outlined" data-icon="work">work</span>
          <span>채용정보</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;