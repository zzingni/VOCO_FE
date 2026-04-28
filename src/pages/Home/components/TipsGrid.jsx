const TipsGrid = () => {
  return (
    <div className="w-full max-w-4xl mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container-high transition-colors">
        <span className="material-symbols-outlined text-primary mb-2" data-icon="tips_and_updates">tips_and_updates</span>
        <h4 className="font-bold font-headline text-sm text-on-surface mb-1">명확한 발음</h4>
        <p className="text-xs text-on-surface-variant leading-relaxed">AI가 정확하게 인식할 수 있도록 일정한 속도와 명확한 발음으로 답변해 주세요.</p>
      </div>
      <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container-high transition-colors">
        <span className="material-symbols-outlined text-secondary mb-2" data-icon="timer">timer</span>
        <h4 className="font-bold font-headline text-sm text-on-surface mb-1">권장 시간</h4>
        <p className="text-xs text-on-surface-variant leading-relaxed">답변 당 1분에서 2분 내외로 답변하는 가장 효과적입니다.</p>
      </div>
      <div className="bg-surface-container-low p-4 rounded-lg hover:bg-surface-container-high transition-colors">
        <span className="material-symbols-outlined text-tertiary mb-2" data-icon="noise_control_off">noise_control_off</span>
        <h4 className="font-bold font-headline text-sm text-on-surface mb-1">주변 소음</h4>
        <p className="text-xs text-on-surface-variant leading-relaxed">정확한 분석을 위해 조용한 환경에서 녹음을 진행하시기를 권장합니다.</p>
      </div>
    </div>
  );
};

export default TipsGrid;