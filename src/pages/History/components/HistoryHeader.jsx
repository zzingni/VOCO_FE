const HistoryHeader = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-on-surface">나의 면접 여정</h1>
        <p className="text-on-surface-variant mt-2 text-lg">지금까지 진행한 AI 모의 면접 기록입니다.</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-[#d8e2ff] text-[#001a41] px-4 py-2 rounded-full text-sm font-semibold flex items-center">
          <span className="material-symbols-outlined mr-1 text-sm" data-icon="bar_chart">bar_chart</span>
          평균 점수: 88점
        </span>
        <span className="px-4 py-2 rounded-full text-sm font-semibold flex items-center" style={{backgroundColor: 'rgba(13, 153, 255, 0.1)', color: '#0D99FF'}}>
          <span className="material-symbols-outlined mr-1 text-sm" data-icon="calendar_month">calendar_month</span>
          이번 달: 5회
        </span>
      </div>
    </div>
  );
};

export default HistoryHeader;
