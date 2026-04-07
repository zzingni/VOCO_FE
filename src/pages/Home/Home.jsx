import MainLayout from "../../layouts/MainLayout";
import RecordButton from "./components/RecordButton";
import InterviewCard from "./components/InterviewCard";
import TipsGrid from "./components/TipsGrid";

const Home = () => {
  return (
    <MainLayout>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col items-center max-w-4xl pt-12 pb-12">
          <InterviewCard />
          <RecordButton />
          <TipsGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;