const InterviewCard = ({ question, currentIndex, totalCount, onNext }) => {
  return (
    <div className="w-full mb-6 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-slate-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined" data-icon="record_voice_over">record_voice_over</span>
          </div>
          <div>
            <h3 className="text-on-surface font-bold font-headline text-lg">AI 모의 면접 세션</h3>
            <p className="text-on-surface-variant text-sm font-body">진행도: {currentIndex + 1} / {totalCount}</p>
          </div>
        </div>
        <div className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold font-headline">
          Live
        </div>
      </div>
      
      {/* 질문 강조 영역 */}
      <div className="mt-2 mb-4 p-4 bg-surface-container rounded-xl border-l-4 border-primary">
        <p className="text-on-surface font-headline text-xl md:text-2xl font-bold leading-relaxed break-keep">
          {question}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2">
          <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-medium">직무 맞춤형</span>
          <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-medium">난이도: 자동</span>
        </div>
        
        {onNext && (
          <button 
            onClick={onNext}
            className="flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-primary transition-colors bg-slate-50 hover:bg-blue-50 px-3 py-1.5 rounded-lg"
          >
            <span>다음 질문 넘기기</span>
            <span className="material-symbols-outlined text-base">skip_next</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default InterviewCard;