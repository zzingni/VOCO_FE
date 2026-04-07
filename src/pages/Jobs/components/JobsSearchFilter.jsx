const JobsSearchFilter = () => {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl mb-12 flex flex-col md:flex-row gap-4 items-center">
      <div className="relative flex-1 w-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input 
          className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-xl focus:ring-2 focus:ring-primary transition-all" 
          placeholder="직무, 기술 스택, 회사명 검색" 
          type="text"
        />
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-lowest text-on-surface font-medium rounded-xl hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">filter_list</span> 필터
        </button>
        <button className="flex-1 md:flex-none px-8 py-3 bg-primary text-white font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center">
          검색하기
        </button>
      </div>
    </div>
  );
};

export default JobsSearchFilter;
