const PromotionCard = () => {
  return (
    <div className="lg:col-span-12 relative overflow-hidden rounded-xl bg-[#0D99FF] text-white p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
      <div className="z-10 max-w-lg">
        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">AI 팁 오브 더 데이</span>
        <h3 className="text-3xl font-bold mb-4">"두괄식 답변은 면접관의 집중력을 30% 높여줍니다"</h3>
        <p className="text-white/80">voco AI의 피드백을 활용해 가장 중요한 성과부터 말하는 연습을 시작해보세요. 당신의 합격률이 올라갑니다.</p>
      </div>
      <div className="z-10">
        <button className="bg-white text-[#0D99FF] px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-surface transition-all active:scale-95 whitespace-nowrap">
          강화 훈련 시작하기
        </button>
      </div>
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
      <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default PromotionCard;
