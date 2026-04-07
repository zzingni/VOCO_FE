const CommentSection = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold font-headline mb-6 text-slate-900 border-b border-slate-100 pb-4">
        댓글 <span className="text-primary ml-1">3</span>
      </h3>

      {/* Comment Input */}
      <div className="flex gap-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">JD</div>
        <div className="flex-1 relative">
          <textarea 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-medium h-24"
            placeholder="따뜻한 댓글로 의견을 나눠보세요."
          ></textarea>
          <div className="absolute bottom-3 right-3">
            <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
              등록
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        
        {/* Comment 1 */}
        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold shrink-0">JH</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-slate-900">박제현</span>
              <span className="text-[10px] text-slate-400 font-medium">1시간 전</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              정말 좋은 정보 감사합니다! Voco 모의 면접 설정하실 때 어떤 직무로 선택하고 연습하셨는지 여쭤봐도 될까요?
            </p>
            <div className="flex items-center gap-3 mt-2">
              <button className="text-xs font-semibold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                답글 달기
              </button>
            </div>
          </div>
        </div>

        {/* Comment 2 (Reply) */}
        <div className="flex gap-4 ml-10 group">
          <img 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover shrink-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtLlqNy-KQZWUXbJx46z7I_FpVryZbPohKlqZLApu38Z1S9Kav6y0A5BPtN9NPqImK2Ax3jZRLhpLugvhvsN_5x6loIYSDFspzulaDz1n6r0s_ZunOaQxfzJLFk49pdYWpXjZth5-vaM6h-NpYclrffYE3udRNRnkSYP-SAdEC86Ke4_1rBmzyJQWytN5ISW4x4bMyyvw-zdHJorxdnqgrKZsRixRfKfKzn0e5r_vIy5PJiQ-878ic5ap5QW1kK90kCqpGX947ug" 
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-1">
                김민수 <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded uppercase font-black tracking-tighter">작성자</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">45분 전</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              도움이 되었다니 다행이에요! 저는 'React Frontend Developer' 영문 키워드로 직접 입력하고 '상세 다이빙 모드'를 활성화해서 진행했어요.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-100 my-6" />

        {/* Comment 3 */}
        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold shrink-0">SY</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sm text-slate-900">이소연</span>
              <span className="text-[10px] text-slate-400 font-medium">2시간 전</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              합격 진심으로 축하드립니다!! 좋은 기운 받고 갑니다 :)
            </p>
            <div className="flex items-center gap-3 mt-2">
              <button className="text-xs font-semibold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                답글 달기
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CommentSection;
