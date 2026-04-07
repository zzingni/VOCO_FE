const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between px-6 py-4 max-w-full mx-auto">
        <a href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">voco</a>
        <div className="hidden md:flex items-center gap-8">
        </div>
        <button 
          onClick={() => window.location.href = '/login'} 
          className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline text-sm font-bold tracking-tight hover:bg-primary transition-all duration-200 active:scale-95"
        >
          로그인
        </button>
      </div>
    </nav>
  );
};

export default Navbar;