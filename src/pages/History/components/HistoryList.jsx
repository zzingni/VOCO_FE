import HistoryCard from "./HistoryCard";

const HistoryList = () => {
  const historyData = [
    {
      date: "2026.04.05",
      title: "프론트엔드 개발자 (시니어)",
      subtitle: "React, TypeScript, System Design Focus",
      score: "92",
      status: "완료됨",
      statusColor: "bg-[#54f8d7]/20 text-[#00705e]",
      bgColor: "bg-[#d8e2ff]",
      textColor: "text-[#0D99FF]",
      icon: "code",
      buttonText: "상세 보기",
      buttonIcon: "arrow_forward",
      buttonStyle: "bg-primary text-white",
      isButtonDisabled: false
    },
    {
      date: "2026.04.02",
      title: "프로덕트 디자이너",
      subtitle: "UI/UX, Prototyping, Case Study",
      score: "85",
      status: "완료됨",
      statusColor: "bg-[#54f8d7]/20 text-[#00705e]",
      bgColor: "bg-[#ffdbcc]",
      textColor: "text-[#9e3d00]",
      icon: "design_services",
      buttonText: "상세 보기",
      buttonIcon: "arrow_forward",
      buttonStyle: "bg-primary text-white",
      isButtonDisabled: false
    },
    {
      date: "2026.03.28",
      title: "백엔드 엔지니어",
      subtitle: "Node.js, PostgreSQL, Architecture",
      score: "--",
      status: "분석 중",
      statusColor: "bg-slate-100 text-slate-500",
      bgColor: "bg-slate-100",
      textColor: "text-slate-500",
      icon: "database",
      buttonText: "이어서 하기",
      buttonIcon: "play_arrow",
      buttonStyle: "bg-slate-100 text-slate-400",
      isButtonDisabled: true
    },
    {
      date: "2026.03.15",
      title: "프론트엔드 개발자 (주니어)",
      subtitle: "Javascript Basics, CSS Layouts",
      score: "78",
      status: "완료됨",
      statusColor: "bg-[#54f8d7]/20 text-[#00705e]",
      bgColor: "bg-[#d8e2ff]",
      textColor: "text-[#0D99FF]",
      icon: "terminal",
      buttonText: "상세 보기",
      buttonIcon: "arrow_forward",
      buttonStyle: "bg-primary text-white",
      isButtonDisabled: false
    },
    {
      date: "2026.03.02",
      title: "프로젝트 매니저",
      subtitle: "Agile Methodology, Stakeholder Management",
      score: "64",
      status: "완료됨",
      statusColor: "bg-[#54f8d7]/20 text-[#00705e]",
      bgColor: "bg-error-container",
      textColor: "text-error",
      icon: "person",
      buttonText: "상세 보기",
      buttonIcon: "arrow_forward",
      buttonStyle: "bg-primary text-white",
      isButtonDisabled: false
    }
  ];

  return (
    <div className="space-y-4">
      {historyData.map((data, index) => (
        <HistoryCard key={index} {...data} />
      ))}
      
      {/* Load More Button */}
      <div className="mt-12 text-center pt-8">
        <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm">
          기록 더 보기
        </button>
      </div>
    </div>
  );
};

export default HistoryList;
