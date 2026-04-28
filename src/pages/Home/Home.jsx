import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import RecordButton from "./components/RecordButton";
import InterviewCard from "./components/InterviewCard";
import TipsGrid from "./components/TipsGrid";
import { fetchQuestions } from "../../utils/api";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to load questions:", error);
        setErrorMsg(error.message || '알 수 없는 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      alert("모든 질문이 끝났습니다!");
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || null;

  return (
    <MainLayout>
      <div className="w-full flex justify-center h-full">
        <div className="w-full flex flex-col items-center max-w-4xl pt-4 pb-4">
          {isLoading ? (
             <div className="w-full max-w-2xl mb-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex justify-center items-center h-24 text-on-surface-variant">
               질문을 불러오는 중입니다...
             </div>
          ) : currentQuestion ? (
            <InterviewCard 
              question={currentQuestion.content} 
              currentIndex={currentQuestionIndex} 
              totalCount={questions.length} 
            />
          ) : (
            <div className="w-full max-w-2xl mb-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-center items-center h-24 text-on-surface-variant">
              <p>질문 목록을 불러올 수 없습니다.</p>
              {errorMsg && <p className="text-red-500 text-sm mt-1">에러: {errorMsg}</p>}
            </div>
          )}
          <RecordButton onUploadSuccess={handleNextQuestion} questionId={currentQuestion?.id} />
          
          <div className="mt-6 mb-4">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="px-6 py-2 border-2 border-error text-error rounded-full font-bold font-headline hover:bg-error hover:text-on-error transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              면접 종료하기
            </button>
          </div>

          <TipsGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;