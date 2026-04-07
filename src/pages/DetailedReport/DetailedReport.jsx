import MainLayout from "../../layouts/MainLayout";
import ReportHeader from "./components/ReportHeader";
import OverviewCards from "./components/OverviewCards";
import AIFeedback from "./components/AIFeedback";
import VoiceAnalysis from "./components/VoiceAnalysis";
import ScoresAndWords from "./components/ScoresAndWords";
import FloatingMicrophone from "./components/FloatingMicrophone";

const DetailedReport = () => {
  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto md:px-6">
        <ReportHeader />
        <OverviewCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: AI Content & Detailed Analysis */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <AIFeedback />
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
