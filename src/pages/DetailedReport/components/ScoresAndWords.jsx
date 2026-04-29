import { useMemo } from "react";

const ScoresAndWords = ({ reportsData }) => {
  const { topWords, displayWords, top3WordsText } = useMemo(() => {
    const wordCounts = {};
    if (reportsData?.reports) {
      reportsData.reports.forEach(report => {
        if (report.repeated_words) {
          report.repeated_words.forEach(rw => {
            // Ensure rw.word is a valid string, even if null/undefined
            const wordStr = String(rw.word || "");
            if (wordStr.trim() !== "") {
              const countNum = Number(rw.count || 0);
              wordCounts[wordStr] = (wordCounts[wordStr] || 0) + countNum;
            }
          });
        }
      });
    }

    const sortedWords = Object.keys(wordCounts)
      .map(word => ({ word, count: wordCounts[word] }))
      .sort((a, b) => b.count - a.count);

    const topWords = sortedWords.slice(0, 20);
    
    const top3 = topWords.slice(0, 3).map(w => w.word);
    let top3WordsText = "";
    if (top3.length > 0) {
      top3WordsText = `"${top3.join('", "')}" 단어를 주력으로 사용하셨습니다.`;
    }

    const displayWords = [...topWords].sort((a, b) => a.word.localeCompare(b.word));

    return { topWords, displayWords, top3WordsText };
  }, [reportsData]);

  const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"];
  const weights = ["font-medium", "font-medium", "font-semibold", "font-bold", "font-bold", "font-extrabold", "font-black"];
  const colors = [
    "text-primary", "text-secondary", "text-tertiary", 
    "text-slate-600", "text-primary/70", "text-slate-500", "text-slate-400"
  ];

  const maxCount = topWords.length > 0 ? topWords[0].count : 1;
  const minCount = topWords.length > 0 ? topWords[topWords.length - 1].count : 0;

  const getStyleClasses = (count, word) => {
    let sizeIndex = 0;
    if (maxCount > minCount) {
      const ratio = (count - minCount) / (maxCount - minCount);
      sizeIndex = Math.floor(ratio * (sizes.length - 1));
    } else {
      sizeIndex = Math.floor((sizes.length - 1) / 2);
    }

    const sizeClass = sizes[sizeIndex] || sizes[0];
    const weightClass = weights[sizeIndex] || weights[0];
    
    const safeWord = String(word || "");
    const charSum = safeWord.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const colorClass = colors[charSum % colors.length];

    return `${sizeClass} ${weightClass} ${colorClass}`;
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold mb-8 font-headline">비언어적 요소 점수</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-bold text-sm">자신감 (Confidence)</span>
              <span className="font-bold text-sm text-primary font-headline">88</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: "88%", boxShadow: "0 0 12px rgba(13, 153, 255, 0.3)" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-bold text-sm">태도 및 성실성 (Attitude)</span>
              <span className="font-bold text-sm text-secondary font-headline">95</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold mb-6 font-headline">자주 사용한 단어</h2>
        
        {displayWords.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-3 items-center justify-center p-4">
              {displayWords.map((item) => (
                <span 
                  key={item.word} 
                  className={`${getStyleClasses(item.count, item.word)} hover:scale-110 transition-transform cursor-default`}
                  title={`출현 빈도: ${item.count}회`}
                >
                  {item.word}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs text-slate-400 font-medium text-center italic">{top3WordsText}</p>
            </div>
          </>
        ) : (
          <div className="py-8 text-center text-sm text-slate-400">
            분석된 자주 사용한 단어 데이터가 없습니다.
          </div>
        )}
      </section>
    </div>
  );
};

export default ScoresAndWords;
