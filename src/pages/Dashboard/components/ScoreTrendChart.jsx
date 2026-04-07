const ScoreTrendChart = () => {
  return (
    <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl font-bold text-on-surface">점수 추이</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-full text-xs font-bold bg-surface-container-high text-on-surface-variant">7일</button>
          <button className="px-3 py-1 rounded-full text-xs font-bold bg-[#0D99FF] text-white shadow-md">30일</button>
        </div>
      </div>
      <div className="relative h-64 w-full bg-surface-container-low/30 rounded-xl overflow-hidden group">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0D99FF" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#0D99FF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path d="M0 150 Q 100 140, 200 100 T 400 80 T 600 50 T 800 30 V 200 H 0 Z" fill="url(#chartGradient)"></path>
          <path d="M0 150 Q 100 140, 200 100 T 400 80 T 600 50 T 800 30" fill="none" stroke="#0D99FF" strokeLinecap="round" strokeWidth="4"></path>
          <circle cx="200" cy="100" fill="#ffffff" r="5" stroke="#0D99FF" strokeWidth="2"></circle>
          <circle cx="400" cy="80" fill="#ffffff" r="5" stroke="#0D99FF" strokeWidth="2"></circle>
          <circle cx="600" cy="50" fill="#ffffff" r="5" stroke="#0D99FF" strokeWidth="2"></circle>
          <circle cx="800" cy="30" fill="#ffffff" r="5" stroke="#0D99FF" strokeWidth="2"></circle>
        </svg>
        <div className="absolute inset-0 flex items-end justify-between px-6 pb-2 text-[10px] font-bold text-outline uppercase tracking-wider">
          <span>1주 전</span>
          <span>현재</span>
        </div>
      </div>
      <div className="mt-6 flex justify-between text-on-surface-variant text-sm border-t border-outline-variant/10 pt-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0D99FF]"></span>
          <span>종합 점수</span>
        </div>
        <span className="font-medium">지난 달 대비 12.4% 상승</span>
      </div>
    </div>
  );
};

export default ScoreTrendChart;
