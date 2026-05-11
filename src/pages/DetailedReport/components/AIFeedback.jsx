import { useState } from "react";

const AIFeedback = ({ reportsData, questionsMap }) => {
  const [openAnswerIds, setOpenAnswerIds] = useState({});

  if (!reportsData || !reportsData.reports || reportsData.reports.length === 0) {
    return (
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex justify-center items-center">
        <p className="text-slate-500">리포트 데이터가 없습니다.</p>
      </section>
    );
  }

  const reports = reportsData.reports;

  const toggleAnswer = (id) => {
    setOpenAnswerIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
            <span className="material-symbols-outlined text-sm" data-icon="smart_toy">smart_toy</span> 면접 종합 평가
          </h4>
          <p className="text-on-surface-variant leading-relaxed text-sm whitespace-pre-line">
            총 {reportsData.count}개의 답변이 분석되었습니다. 각 답변별 상세 피드백을 확인하세요.
          </p>
        </div>

        <div className="pt-2">
          <h4 className="font-bold mb-4 font-headline">답변 상세 분석</h4>
          <div className="flex flex-col gap-4">
            {reports.flatMap(r => r.answers || []).map((answer, index) => {
              const { feedback, question, text, answer_id } = answer;
              const questionContent = question || `질문 ${answer.question_id}`;
              const isOpen = openAnswerIds[answer_id] || false;

              return (
                <div key={answer_id} className="flex flex-col p-4 rounded-xl border border-slate-100 bg-white hover:border-primary/30 transition-colors">
                  <div className="flex gap-4 items-start">
                    <div className="text-primary font-black text-lg font-headline mt-1">Q{index + 1}</div>
                    <div className="flex-1">
                      <p className="font-bold text-sm mb-1">{questionContent}</p>
                      
                      {feedback?.score !== undefined && feedback?.score !== null && (
                        <div className="mt-2 inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                          <span className="material-symbols-outlined text-sm" data-icon="military_tech">military_tech</span>
                          AI 평가 점수: {feedback.score}점
                        </div>
                      )}
                      
                      {feedback?.content && (
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          {feedback.content}
                        </p>
                      )}

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <button 
                          onClick={() => toggleAnswer(answer_id)}
                          className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-primary transition-colors group"
                        >
                          <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-y-0.5" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} data-icon="expand_more">
                            expand_more
                          </span>
                          내가 답변한 내용 보기
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 leading-relaxed break-keep">
                            {text || "답변 내용이 없습니다."}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeedback;
