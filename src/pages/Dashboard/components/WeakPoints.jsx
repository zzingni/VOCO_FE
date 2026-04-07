const WeakPoints = () => {
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col">
      <h3 className="text-xl font-bold text-on-surface mb-6">개선이 필요한 영역</h3>
      <div className="space-y-6 flex-1">
        <div className="group">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" data-icon="record_voice_over">record_voice_over</span>
              </div>
              <span className="font-semibold text-on-surface">말하기 속도</span>
            </div>
            <span className="text-tertiary font-bold">하위 20%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-[35%] rounded-full"></div>
          </div>
          <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">긴장할 때 말이 빨라지는 경향이 있습니다. 조금 더 여유를 가져보세요.</p>
        </div>
        <div className="group">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
              </div>
              <span className="font-semibold text-on-surface">논리적 답변</span>
            </div>
            <span className="text-secondary font-bold">양호 72%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[72%] rounded-full"></div>
          </div>
          <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">핵심부터 말하는 습관은 좋습니다. 구체적인 사례를 더 보충해보세요.</p>
        </div>
      </div>
      <button className="mt-8 w-full py-4 border-2 border-blue-500/10 hover:border-blue-500/30 text-[#0D99FF] font-bold rounded-xl transition-all">
        상세 피드백 보기
      </button>
    </div>
  );
};

export default WeakPoints;
