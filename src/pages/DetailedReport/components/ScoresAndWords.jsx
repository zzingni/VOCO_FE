const ScoresAndWords = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Confidence & Attitude Scores */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold mb-8 font-headline">비언어적 요소 점수</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-bold text-sm">자신감 (Confidence)</span>
              <span className="font-bold text-sm text-primary font-headline">88</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: "88%", boxShadow: "0 0 12px rgba(13, 153, 255, 0.3)" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-bold text-sm">태도 및 성실성 (Attitude)</span>
              <span className="font-bold text-sm text-secondary font-headline">95</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Repeated Words (Word Cloud Style) */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold mb-6 font-headline">자주 사용한 단어</h2>
        <div className="flex flex-wrap gap-2 items-center justify-center p-4">
          <span className="text-3xl font-black text-primary hover:scale-110 transition-transform cursor-default">사용자</span>
          <span className="text-xl font-bold text-slate-600 hover:scale-110 transition-transform cursor-default">디자인</span>
          <span className="text-sm font-medium text-slate-400 hover:scale-110 transition-transform cursor-default">해결</span>
          <span className="text-2xl font-extrabold text-secondary hover:scale-110 transition-transform cursor-default">문제</span>
          <span className="text-base font-semibold text-slate-500 hover:scale-110 transition-transform cursor-default">성장</span>
          <span className="text-lg font-bold text-primary hover:scale-110 transition-transform cursor-default">경험</span>
          <span className="text-xs font-medium text-slate-400 hover:scale-110 transition-transform cursor-default">비즈니스</span>
          <span className="text-2xl font-black text-tertiary hover:scale-110 transition-transform cursor-default">협업</span>
          <span className="text-sm font-semibold text-slate-500 hover:scale-110 transition-transform cursor-default">프로세스</span>
          <span className="text-base font-bold text-slate-600 hover:scale-110 transition-transform cursor-default">피드백</span>
          <span className="text-xl font-extrabold text-primary/70 hover:scale-110 transition-transform cursor-default">데이터</span>
        </div>
        <div className="mt-6">
          <p className="text-xs text-slate-400 font-medium text-center italic">"사용자", "문제", "협업" 단어를 주력으로 사용하셨습니다.</p>
        </div>
      </section>
    </div>
  );
};

export default ScoresAndWords;
