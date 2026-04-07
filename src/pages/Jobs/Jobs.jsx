import MainLayout from "../../layouts/MainLayout";
import JobsHeader from "./components/JobsHeader";
import JobsSearchFilter from "./components/JobsSearchFilter";
import JobList from "./components/JobList";

const Jobs = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto md:px-6 pt-6 pb-16">
        <JobsHeader />
        <JobsSearchFilter />
        <JobList />
      </div>
    </MainLayout>
  );
};

export default Jobs;
