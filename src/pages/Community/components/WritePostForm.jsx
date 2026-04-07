const WritePostForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        
        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-bold text-slate-700">제목</label>
          <input 
            type="text" 
            id="title"
            placeholder="글의 제목을 입력해주세요" 
            className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-primary transition-all font-medium text-base"
          />
        </div>

        {/* Categories / Tags Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Dropdown */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-bold text-slate-700">카테고리</label>
            <div className="relative">
              <select 
                id="category"
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-primary transition-all font-medium appearance-none"
              >
                <option value="" disabled selected>카테고리를 선택하세요</option>
                <option value="tip">Interview Tip (면접 팁)</option>
                <option value="success">Success Story (합격 수기)</option>
                <option value="qna">Q&A (질문답변)</option>
                <option value="free">Free Talk (자유주제)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          {/* Related Tag Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tag" className="text-sm font-bold text-slate-700">관련 태그 (선택)</label>
            <input 
              type="text" 
              id="tag"
              placeholder="예: Naver, 프론트엔드, Data Science" 
              className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-primary transition-all font-medium"
            />
          </div>
        </div>

        {/* Content Textarea */}
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-sm font-bold text-slate-700">본문 내용</label>
          <textarea 
            id="content"
            rows="12"
            placeholder="면접 팁, 합격 후기 등 자유롭게 내용을 작성해주세요. 서로의 성장을 응원하는 따뜻한 커뮤니티를 만들어가요." 
            className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-primary transition-all font-medium resize-none leading-relaxed"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 mt-4 pt-6 border-t border-slate-100">
          <button 
            type="button"
            className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => window.history.back()}
          >
            취소
          </button>
          <button 
            type="submit"
            className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">send</span>
            게시글 등록
          </button>
        </div>

      </form>
    </div>
  );
};

export default WritePostForm;
