import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import RecordButton from "./components/RecordButton";
import InterviewCard from "./components/InterviewCard";
import TipsGrid from "./components/TipsGrid";
import FieldSelector from "./components/FieldSelector";
import { fetchQuestions, fetchFields, startInterview, endInterview } from "../../utils/api";

const Home = () => {
  const [fields, setFields] = useState([]);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [currentInterviewId, setCurrentInterviewId] = useState(null);

  useEffect(() => {
    const loadFields = async () => {
      try {
        const fieldsData = await fetchFields();
        setFields(fieldsData);
        if (fieldsData && fieldsData.length > 0) {
          setSelectedFieldId(fieldsData[0].id); // Select first by default
        }
      } catch (error) {
        console.error("Failed to load fields:", error);
        setErrorMsg(error.message || '분야 목록을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false); // Initial load is done
      }
    };
    loadFields();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      alert("모든 질문이 끝났습니다!");
    }
  };

  const handleStartInterview = async () => {
    if (!selectedFieldId) {
      alert("직무 분야를 선택해주세요.");
      return;
    }
    
    setIsLoading(true);
    try {
      // 1. Start Interview to get ID
      const startResult = await startInterview(selectedFieldId);
      setCurrentInterviewId(startResult.interview_id);

      // 2. Fetch questions specific to the selected field
      const questionsData = await fetchQuestions(selectedFieldId);
      setQuestions(questionsData);
      setCurrentQuestionIndex(0);
      setIsInterviewStarted(true);
    } catch (error) {
      console.error("Failed to start interview:", error);
      alert("면접을 시작하는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndInterview = async () => {
    if (currentInterviewId) {
      try {
        await endInterview(currentInterviewId);
      } catch (e) {
        console.error(e);
      }
    }
    window.location.href = '/dashboard';
  };

  const currentQuestion = questions[currentQuestionIndex] || null;

  return (
    <MainLayout>
      <div className="w-full flex justify-center h-full">
        {!isInterviewStarted ? (
          /* --- Field Selection Phase --- */
          <div className="w-full max-w-3xl flex flex-col items-center pt-16 pb-12 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-2 text-slate-900 text-center tracking-tight">어떤 분야의 면접을 준비하시나요?</h2>
            <p className="text-slate-500 mb-10 text-center">voco가 해당 직무에 가장 자주 출제되는 맞춤형 질문을 준비해 드립니다.</p>
            
            <div className="w-full mb-8">
              <FieldSelector 
                fields={fields} 
                selectedFieldId={selectedFieldId} 
                onSelectField={setSelectedFieldId} 
              />
            </div>
            
            <button 
              onClick={handleStartInterview}
              className="px-12 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>맞춤형 면접 시작하기</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        ) : (
          /* --- Interview Phase --- */
          <div className="w-full flex flex-col items-center max-w-4xl pt-8 pb-4 px-6 md:px-0">
            
            {/* Header / Back to Selection */}
            <div className="w-full flex justify-start mb-6">
              <button 
                onClick={() => setIsInterviewStarted(false)}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                분야 다시 선택하기
              </button>
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-col items-center min-w-0">
              {isLoading ? (
                 <div className="w-full mb-6 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex justify-center items-center h-24 text-on-surface-variant border border-slate-50">
                   질문을 불러오는 중입니다...
                 </div>
              ) : currentQuestion ? (
                <InterviewCard 
                  question={currentQuestion.content} 
                  currentIndex={currentQuestionIndex} 
                  totalCount={questions.length} 
                  onNext={handleNextQuestion}
                />
              ) : (
                <div className="w-full mb-6 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-center items-center h-24 text-on-surface-variant border border-slate-50">
                  <p>질문 목록을 불러올 수 없습니다.</p>
                  {errorMsg && <p className="text-red-500 text-sm mt-1">에러: {errorMsg}</p>}
                </div>
              )}
              
              <div className="w-full flex flex-col items-center mt-6">
                <RecordButton 
                  onUploadSuccess={handleNextQuestion} 
                  questionId={currentQuestion?.id} 
                  interviewId={currentInterviewId}
                />
                
                <div className="mt-6 mb-8">
                  <button 
                    onClick={handleEndInterview}
                    className="px-6 py-2 border-2 border-error text-error rounded-full font-bold font-headline hover:bg-error hover:text-on-error transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                  >
                    면접 종료하기
                  </button>
                </div>
              </div>

              <div className="w-full mt-4">
                <TipsGrid />
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;