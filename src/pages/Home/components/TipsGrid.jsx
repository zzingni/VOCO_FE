const TipsGrid = () => {
  return (
    <div className="w-full max-w-4xl mt-24 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-gray-100 rounded-lg">
        <h4 className="font-bold">명확한 발음</h4>
        <p className="text-sm text-gray-500">
          또박또박 말하기
        </p>
      </div>

      <div className="p-6 bg-gray-100 rounded-lg">
        <h4 className="font-bold">권장 시간</h4>
        <p className="text-sm text-gray-500">
          1~2분
        </p>
      </div>

      <div className="p-6 bg-gray-100 rounded-lg">
        <h4 className="font-bold">소음 제거</h4>
        <p className="text-sm text-gray-500">
          조용한 환경
        </p>
      </div>
    </div>
  );
};

export default TipsGrid;