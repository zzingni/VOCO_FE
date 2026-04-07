const PostDetailContent = () => {
  return (
    <article className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100 mb-8">
      {/* Category & Time */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold rounded-full uppercase tracking-wider">Interview Tip</span>
          <span className="px-3 py-1 bg-surface-container text-outline text-[11px] font-bold rounded-full uppercase tracking-wider">Naver</span>
        </div>
        <span className="text-sm text-outline font-medium">2026.04.07 14:30</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-extrabold font-headline text-on-surface mb-8 leading-snug">
        네이버 프론트엔드 면접에서 가장 많이 물어본 질문 리스트
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 pb-8 border-b border-slate-100 mb-8">
        <img 
          alt="Profile" 
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 bg-slate-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtLlqNy-KQZWUXbJx46z7I_FpVryZbPohKlqZLApu38Z1S9Kav6y0A5BPtN9NPqImK2Ax3jZRLhpLugvhvsN_5x6loIYSDFspzulaDz1n6r0s_ZunOaQxfzJLFk49pdYWpXjZth5-vaM6h-NpYclrffYE3udRNRnkSYP-SAdEC86Ke4_1rBmzyJQWytN5ISW4x4bMyyvw-zdHJorxdnqgrKZsRixRfKfKzn0e5r_vIy5PJiQ-878ic5ap5QW1kK90kCqpGX947ug" 
        />
        <div>
          <div className="text-base font-bold text-on-surface">김민수</div>
          <div className="text-xs text-outline font-semibold">Senior Developer</div>
        </div>
      </div>

      {/* Body Content */}
      <div className="prose prose-slate max-w-none text-on-surface-variant leading-loose mb-12">
        <p className="mb-4">
          안녕하세요! 최근 네이버 공채 면접을 보면서 정리한 기술 면접 질문 리스트를 커뮤니티 분들과 공유하고자 글을 작성합니다.
        </p>
        <p className="mb-4">
          프론트엔드 직무이다 보니, React 렌더링 최적화와 브라우저 엔진의 동작 원리에 대한 질문이 상당히 깊게 들어왔습니다.
          특히 단순하게 '어떻게 사용하는가?'를 넘어서, '왜 그렇게 동작하는가?'에 대한 기반 지식을 많이 요구하는 느낌을 받았습니다.
        </p>
        <h3 className="text-lg font-bold text-slate-800 mt-8 mb-4">주요 질문 정리</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>브라우저 렌더링 파이프라인 (Reflow, Repaint 등)</li>
          <li>React Fiber 아키텍처의 한계와 동시성(Concurrent) 모드</li>
          <li>프론트엔드 상태 관리 라이브러리의 구조적 차이점 비교 (Redux vs Zustand)</li>
          <li>웹 성능 최적화 지표 (Core Web Vitals) 개선 경험</li>
        </ul>
        <p>
          voco를 통해 사전에 모의 면접을 반복 진행한 것이 긴장 완화에 큰 도움이 되었습니다.
          다들 끝까지 포기하지 마시고 좋은 결과 있으시길 바랍니다! 궁금한 점 편하게 댓글 남겨주세요. 😊
        </p>
      </div>

      {/* Interaction Buttons */}
      <div className="flex items-center justify-center gap-4 pt-6 mt-4">
        <button className="flex flex-col items-center gap-1 group">
          <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/30 transition-colors text-slate-400 group-hover:text-primary">
            <span className="material-symbols-outlined text-2xl">thumb_up</span>
          </div>
          <span className="text-xs font-bold text-outline group-hover:text-primary transition-colors">24</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-colors text-slate-400 group-hover:text-slate-600">
            <span className="material-symbols-outlined text-2xl">share</span>
          </div>
          <span className="text-xs font-bold text-outline group-hover:text-slate-600 transition-colors">공유</span>
        </button>
      </div>
    </article>
  );
};

export default PostDetailContent;
