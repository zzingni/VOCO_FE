const SearchBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      <div className="md:col-span-3 bg-surface-container-low p-2 rounded-xl flex items-center gap-2">
        <span className="material-symbols-outlined pl-3 text-outline">search</span>
        <input 
          className="bg-transparent border-none focus:ring-0 w-full text-sm font-body" 
          placeholder="관심 있는 키워드를 검색해보세요" 
          type="text" 
        />
      </div>
      <button 
        className="bg-primary text-on-primary rounded-xl px-4 py-3 flex items-center justify-center gap-2 font-headline font-bold text-sm shadow-sm hover:opacity-90 active:scale-95 transition-all"
        onClick={() => window.location.href = '/community/write'}
      >
        <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
        <span>글쓰기</span>
      </button>
    </div>
  );
};

export default SearchBar;
