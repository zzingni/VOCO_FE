import { useState } from 'react';

const defaultQuestions = [
  { id: 'q1', title: '성격 및 장단점', text: '' },
  { id: 'q2', title: '지원동기', text: '' },
  { id: 'q3', title: '문제해결 및 경험', text: '' },
  { id: 'q4', title: '입사 후 포부', text: '' },
];

const SelfIntroForm = () => {
  const [answers, setAnswers] = useState(defaultQuestions);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (id, newText) => {
    if (newText.length > 500) return; // 500자 제한
    setAnswers(prev => prev.map(q => q.id === id ? { ...q, text: newText } : q));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // TODO: 백엔드 API 연동 (현재는 제외)
      // await axios.post('/api/self-intro', { answers });
      console.log('저장할 데이터:', answers);
      alert('자기소개서가 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm mt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">자기소개서 입력</h2>
      <div className="space-y-8">
        {answers.map((q) => (
          <div key={q.id} className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                {q.title}
              </label>
              <span className={`text-sm ${q.text.length >= 500 ? 'text-red-500 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
                {q.text.length} / 500 자
              </span>
            </div>
            <textarea
              value={q.text}
              onChange={(e) => handleChange(q.id, e.target.value)}
              placeholder={`${q.title}에 대해 작성해주세요. (최대 500자)`}
              className="w-full h-40 p-5 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all text-base leading-relaxed"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
        >
          {isSaving ? '저장 중...' : '저장하기'}
        </button>
      </div>
    </div>
  );
};

export default SelfIntroForm;
