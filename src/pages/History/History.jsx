import MainLayout from "../../layouts/MainLayout";
import HistoryHeader from "./components/HistoryHeader";
import HistoryList from "./components/HistoryList";

const History = () => {
  return (
    <MainLayout>
      <div className="w-full max-w-5xl mx-auto md:px-12 pt-6">
        <HistoryHeader />
        <HistoryList />
      </div>
    </MainLayout>
  );
};

export default History;
