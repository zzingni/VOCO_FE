import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";
import { fetchInterviewHistory } from "../../../utils/api";

const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await fetchInterviewHistory();
        
        if (data && data.histories) {
          // 백엔드 데이터를 UI 모델에 맞게 변환
          const mappedData = data.histories.map(item => {
            const dateObj = new Date(item.interview_date);
            const dateStr = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
            
            // 분야에 따른 색상이나 아이콘 분기 처리 (디자인 요소)
            let icon = "assignment";
            let bgColor = "bg-[#d8e2ff]";
            let textColor = "text-[#0D99FF]";

            if (item.field?.main_category?.includes("디자인")) {
              icon = "design_services";
              bgColor = "bg-[#ffdbcc]";
              textColor = "text-[#9e3d00]";
            } else if (item.field?.main_category?.includes("기획")) {
              icon = "person";
              bgColor = "bg-error-container";
              textColor = "text-error";
            } else if (item.field?.main_category?.includes("IT")) {
              icon = "code";
            }

            return {
              id: item.interview_id,
              date: dateStr,
              title: item.field?.sub_category || "미지정 직무",
              subtitle: item.field?.main_category || "면접 세션",
              score: item.average_score > 0 ? item.average_score.toString() : "--",
              status: item.average_score > 0 ? "완료됨" : "분석 중",
              statusColor: item.average_score > 0 ? "bg-[#54f8d7]/20 text-[#00705e]" : "bg-slate-100 text-slate-500",
              bgColor,
              textColor,
              icon,
              buttonText: item.average_score > 0 ? "상세 보기" : "이어서 하기",
              buttonIcon: item.average_score > 0 ? "arrow_forward" : "play_arrow",
              buttonStyle: item.average_score > 0 ? "bg-primary text-white" : "bg-slate-100 text-slate-400",
              isButtonDisabled: item.average_score === 0
            };
          });
          setHistories(mappedData);
        }
      } catch (error) {
        console.error("Failed to load interview history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-20">
        <p className="text-slate-500 font-medium">기록을 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {histories.length > 0 ? (
        histories.map((data, index) => (
          <HistoryCard key={data.id || index} {...data} />
        ))
      ) : (
        <div className="w-full flex justify-center py-20 bg-surface-container-lowest rounded-xl border border-slate-100">
          <p className="text-slate-500 font-medium">면접 기록이 없습니다.</p>
        </div>
      )}
      
      {/* Load More Button */}
      {histories.length > 0 && (
        <div className="mt-12 text-center pt-8">
          <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm">
            기록 더 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoryList;
