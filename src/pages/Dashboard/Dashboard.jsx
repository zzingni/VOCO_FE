import MainLayout from "../../layouts/MainLayout";
import DashboardHeader from "./components/DashboardHeader";
import SummaryStats from "./components/SummaryStats";
import ScoreTrendChart from "./components/ScoreTrendChart";
import WeakPoints from "./components/WeakPoints";
import PromotionCard from "./components/PromotionCard";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto md:px-12">
        <DashboardHeader />
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <SummaryStats />
          <ScoreTrendChart />
          <WeakPoints />
          <PromotionCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
