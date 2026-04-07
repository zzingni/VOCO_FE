const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between px-6 h-16 max-w-full mx-auto">
          <a href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">voco</a>
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation links placeholder */}
          </div>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center px-4 pt-24 pb-12 w-full">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
