import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ReportHeader from "./components/ReportHeader";
import OverviewCards from "./components/OverviewCards";
import AIFeedback from "./components/AIFeedback";
import VoiceAnalysis from "./components/VoiceAnalysis";
import ScoresAndWords from "./components/ScoresAndWords";
import FloatingMicrophone from "./components/FloatingMicrophone";
import { fetchAllReports, fetchQuestions } from "../../utils/api";

const DetailedReport = () => {
  const [reportsData, setReportsData] = useState(null);
  const [questionsMap, setQuestionsMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [reports, questions] = await Promise.all([
          fetchAllReports(),
          fetchQuestions()
        ]);
        
        setReportsData(reports);
        
        // 질문 목록을 id를 키로 하는 객체로 변환하여 찾기 쉽게 만듦
        const qMap = {};
        if (Array.isArray(questions)) {
          questions.forEach(q => {
            qMap[q.id] = q.content;
          });
        }
        setQuestionsMap(qMap);
      } catch (error) {
        console.error("Failed to load report data", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto md:px-6">
        <ReportHeader />
        <OverviewCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: AI Content & Detailed Analysis */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {isLoading ? (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex justify-center items-center h-64 text-slate-500">
                리포트 데이터를 불러오는 중입니다...
              </div>
            ) : (
              <AIFeedback reportsData={reportsData} questionsMap={questionsMap} />
            )}
            <VoiceAnalysis />
          </div>

          {/* Right Column: Scores & Word Cloud */}
          <ScoresAndWords />
        </div>
      </div>
      
      <FloatingMicrophone />
    </MainLayout>
  );
};

export default DetailedReport;
