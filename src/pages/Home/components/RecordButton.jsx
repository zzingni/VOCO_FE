const RecordButton = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "rgba(13, 153, 255, 0.2)" }}></div>
        <button className="relative w-64 h-64 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group" style={{ backgroundColor: "#0D99FF", boxShadow: "0 25px 50px -12px rgba(13, 153, 255, 0.3)" }}>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-on-primary text-7xl mb-2" data-icon="mic" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
          </div>
        </button>
      </div>
      <div className="mt-12 space-y-4">
        <h2 className="text-on-surface font-black font-headline text-2xl tracking-tight">버튼을 눌러 답변을 녹음하세요</h2>
        <p className="text-on-surface-variant font-body max-w-sm mx-auto leading-relaxed">
          목소리 톤과 단어 선택, 답변의 구조를 AI가 실시간으로 분석하여 상세한 피드백을 제공합니다.
        </p>
      </div>
    </div>
  );
};

export default RecordButton;