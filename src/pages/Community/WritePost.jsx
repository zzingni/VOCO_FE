import MainLayout from "../../layouts/MainLayout";
import WritePostForm from "./components/WritePostForm";

const WritePost = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto md:px-6 pt-6 pb-16">
        
        {/* Header */}
        <header className="mb-8 flex items-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-extrabold font-headline tracking-tighter text-on-surface">새 글 쓰기</h1>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">여러분의 소중한 경험과 팁을 커뮤니티에 공유해주세요.</p>
          </div>
        </header>

        {/* Form Container */}
        <WritePostForm />
        
      </div>
    </MainLayout>
  );
};

export default WritePost;
