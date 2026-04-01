const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">voco</div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
          로그인
        </button>
      </div>
    </nav>
  );
};

export default Navbar;