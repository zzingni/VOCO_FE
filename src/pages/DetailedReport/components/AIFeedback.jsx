const AIFeedback = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" data-icon="smart_toy">smart_toy</span>
        </div>
        <h2 className="text-xl font-bold font-headline">voco AI 피드백</h2>
      </div>
      <div className="space-y-6">
        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined text-sm" data-icon="star">star</span> 강점 (Strengths)
          </h4>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            본인의 경험을 구체적인 수치(예: 사용자 이탈률 15% 개선)와 연결 지어 설명하는 능력이 탁월합니다. 질문의 의도를 정확히 파악하여 결론부터 말하는 두괄식 답변 구조가 면접관에게 신뢰감을 줍니다.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-tertiary">
          <h4 className="font-bold text-tertiary mb-2 flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined text-sm" data-icon="warning">warning</span> 보완점 (To Improve)
          </h4>
          <p className="text-on-surface-variant leading-relaxed text-sm">
            복잡한 기술적 문제를 설명할 때 문장이 다소 길어지는 경향이 있습니다. 추임새(어..., 음...)의 사용 빈도가 중반 이후 높아지므로 호흡 조절이 필요합니다.
          </p>
        </div>
        <div className="pt-2">
          <h4 className="font-bold mb-4 font-headline">답변 상세 분석</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-primary font-black text-lg font-headline">Q1</div>
              <div>
                <p className="font-bold text-sm mb-1">자기소개와 본인만의 강점은?</p>
                <p className="text-xs text-slate-500">답변의 논리성이 매우 뛰어납니다. 직무 역량을 잘 녹여냈습니다.</p>
              </div>
              <div className="ml-auto flex items-center text-primary font-bold font-headline">95</div>
            </div>
            <hr className="border-slate-100" />
            <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="text-primary font-black text-lg font-headline">Q2</div>
              <div>
                <p className="font-bold text-sm mb-1">프로젝트 진행 시 갈등 상황이 있었다면?</p>
                <p className="text-xs text-slate-500">객관적인 사실 위주로 설명했으나, 본인의 감정 조절 능력에 대한 언급이 부족합니다.</p>
              </div>
              <div className="ml-auto flex items-center text-primary font-bold font-headline">82</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeedback;
