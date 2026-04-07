import MainLayout from "../../layouts/MainLayout";
import PostDetailContent from "./components/PostDetailContent";
import CommentSection from "./components/CommentSection";

const PostDetail = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto md:px-6 pt-6 pb-16">
        {/* Navigation / Header */}
        <div className="mb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            목록으로 돌아가기
          </button>
        </div>

        {/* Components */}
        <PostDetailContent />
        <CommentSection />
      </div>
    </MainLayout>
  );
};

export default PostDetail;
