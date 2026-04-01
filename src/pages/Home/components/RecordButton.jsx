const RecordButton = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-64 h-64 rounded-full bg-blue-500 text-white text-5xl shadow-xl">
        🎤
      </button>

      <h2 className="mt-8 text-xl font-bold">
        버튼을 눌러 면접 질문에 답해보세요!
      </h2>
    </div>
  );
};

export default RecordButton;