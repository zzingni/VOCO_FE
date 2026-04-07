const InterviewCard = () => {
  return (
    <div className="w-full max-w-2xl mb-12 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined" data-icon="record_voice_over">record_voice_over</span>
          </div>
          <div>
            <h3 className="text-on-surface font-bold font-headline text-lg">AI 모의 면접 세션</h3>
            <p className="text-on-surface-variant text-sm font-body">현재 질문: "가장 큰 도전과 성취의 경험은 무엇인가요?"</p>
          </div>
        </div>
        <div className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold font-headline">
          Live
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-medium">직무: 프론트엔드 개발</span>
        <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-medium">난이도: 중급</span>
      </div>
    </div>
  );
};

export default InterviewCard;