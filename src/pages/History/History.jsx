import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import HistoryHeader from "./components/HistoryHeader";
import HistoryList from "./components/HistoryList";

const History = () => {
  const [metrics, setMetrics] = useState({ overallAverage: 0, thisMonthCount: 0 });

  return (
    <MainLayout>
      <div className="w-full max-w-5xl mx-auto md:px-12 pt-6">
        <HistoryHeader overallAverage={metrics.overallAverage} thisMonthCount={metrics.thisMonthCount} />
        <HistoryList onMetricsLoad={setMetrics} />
      </div>
    </MainLayout>
  );
};

export default History;
