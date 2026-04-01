import MainLayout from "../../layouts/MainLayout";
import Footer from "..components/Footer"
import RecordButton from "./components/RecordButton";
import InterviewCard from "./components/InterviewCard";
import TipsGrid from "./components/TipsGrid";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">

        <InterviewCard />

        <RecordButton />

        <TipsGrid />

      </div>
    </MainLayout>
  );
};

export default Home;