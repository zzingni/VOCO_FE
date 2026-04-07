const Footer = () => {
  return (
    <footer className="lg:ml-64 w-full py-8 mt-auto border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-4">
        <div className="font-body text-xs text-slate-500">© 2026 voco. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="font-body text-xs text-slate-400 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">이용약관</a>
          <a className="font-body text-xs text-slate-400 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">개인정보처리방침</a>
          <a className="font-body text-xs text-slate-400 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">고객센터</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;