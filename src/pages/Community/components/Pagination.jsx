const Pagination = () => {
  return (
    <div className="mt-12 flex justify-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold shadow-sm">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-outline hover:bg-surface-container-high transition-colors font-medium">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-outline hover:bg-surface-container-high transition-colors font-medium">3</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-outline hover:bg-surface-container-high transition-colors font-medium">
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;
