import MainLayout from "../../layouts/MainLayout";
import CommunityHeader from "./components/CommunityHeader";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

const Community = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto md:px-6 pt-6">
        <CommunityHeader />
        <SearchBar />
        <PostList />
        <Pagination />
      </div>
    </MainLayout>
  );
};

export default Community;
