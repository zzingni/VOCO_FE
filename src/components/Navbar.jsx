const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between px-6 py-4 max-w-full mx-auto">
        <a href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">voco</a>
        <div className="hidden md:flex items-center gap-8">
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.href = '/mypage'} 
            className="text-slate-600 dark:text-slate-300 px-4 py-2 font-headline text-sm font-bold hover:text-primary transition-colors"
          >
            마이페이지
          </button>
          <button 
            onClick={() => window.location.href = '/login'} 
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline text-sm font-bold tracking-tight hover:bg-primary transition-all duration-200 active:scale-95"
          >
            로그인
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;