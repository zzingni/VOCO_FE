import MainLayout from "../../layouts/MainLayout";
import SelfIntroForm from "./components/SelfIntroForm";

const MyPage = () => {
  return (
    <MainLayout>
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-headline">마이페이지</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">나의 정보와 자기소개서를 관리할 수 있습니다.</p>
        </div>
        
        <SelfIntroForm />
      </div>
    </MainLayout>
  );
};

export default MyPage;
