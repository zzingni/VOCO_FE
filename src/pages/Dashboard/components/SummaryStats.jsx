const SummaryStats = () => {
  return (
    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/5">
        <p className="text-sm font-semibold text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0D99FF]" data-icon="fact_check">fact_check</span>
          총 면접 횟수
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">12</span>
          <span className="text-on-surface-variant font-medium">회</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/5">
        <p className="text-sm font-semibold text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary" data-icon="star">star</span>
          평균 점수
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-secondary">85</span>
          <span className="text-on-surface-variant font-medium">점</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/5">
        <p className="text-sm font-semibold text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0D99FF]" data-icon="trending_up">trending_up</span>
          최근 변화율
        </p>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-[#0D99FF]">+5%</span>
          <div className="bg-blue-50 p-1 rounded-full">
            <span className="material-symbols-outlined text-[#0D99FF] text-sm" data-icon="arrow_upward">arrow_upward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
