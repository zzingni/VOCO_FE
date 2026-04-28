import { useState } from 'react';
import useAudioRecorder from '../../../hooks/useAudioRecorder';
import { uploadAudio } from '../../../utils/api';

const RecordButton = ({ onUploadSuccess, questionId }) => {
  const { isRecording, error, toggleRecording } = useAudioRecorder();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleClick = async () => {
    // 이미 업로드 중이면 무시
    if (isUploading) return;

    if (!isRecording) {
      // 녹음 시작
      setUploadMessage('');
      await toggleRecording();
    } else {
      // 녹음 중지
      const blob = await toggleRecording();
      if (blob) {
        setIsUploading(true);
        setUploadMessage('업로드 중...');
        try {
          await uploadAudio(blob, questionId);
          setUploadMessage('업로드 성공!');
          if (onUploadSuccess) {
            onUploadSuccess();
          }
        } catch (error) {
          setUploadMessage('업로드 실패. 콘솔을 확인해주세요.');
        } finally {
          setIsUploading(false);
          // 3초 후 메시지 초기화
          setTimeout(() => setUploadMessage(''), 3000);
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative group cursor-pointer" onClick={handleClick}>
        <div 
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 scale-110
            ${isRecording ? 'opacity-70 animate-pulse' : 'opacity-0 group-hover:opacity-100'}
          `} 
          style={{ backgroundColor: isRecording ? "rgba(239, 68, 68, 0.3)" : "rgba(13, 153, 255, 0.2)" }}
        ></div>
        <button 
          className={`relative w-48 h-48 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group
            ${isRecording ? 'bg-red-500 shadow-red-500/50' : ''}
            ${isUploading ? 'opacity-70 cursor-not-allowed' : ''}
          `} 
          style={{ 
            backgroundColor: isRecording ? "#ef4444" : "#0D99FF", 
            boxShadow: isRecording ? "0 25px 50px -12px rgba(239, 68, 68, 0.5)" : "0 25px 50px -12px rgba(13, 153, 255, 0.3)" 
          }}
          disabled={isUploading}
        >
          <div className="flex flex-col items-center">
            {isUploading ? (
              <span className="material-symbols-outlined text-on-primary text-6xl mb-1 animate-spin" style={{ fontVariationSettings: "'FILL' 1" }}>
                refresh
              </span>
            ) : isRecording ? (
              <span className="material-symbols-outlined text-on-primary text-6xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                stop
              </span>
            ) : (
              <span className="material-symbols-outlined text-on-primary text-6xl mb-1" data-icon="mic" style={{ fontVariationSettings: "'FILL' 1" }}>
                mic
              </span>
            )}
          </div>
        </button>
      </div>
      
      <div className="mt-6 space-y-2">
        {error && (
          <p className="text-red-500 font-bold">{error}</p>
        )}
        
        {uploadMessage && (
          <p className="text-primary font-bold">{uploadMessage}</p>
        )}

        <h2 className={`font-black font-headline text-xl tracking-tight transition-colors duration-300 ${isRecording ? 'text-red-500' : 'text-on-surface'}`}>
          {isRecording ? "녹음 중입니다..." : "버튼을 눌러 답변을 녹음하세요"}
        </h2>
        <p className="text-on-surface-variant text-sm font-body max-w-sm mx-auto leading-relaxed">
          {isRecording ? (
             "다시 버튼을 누르면 녹음이 종료되고 결과가 분석됩니다."
          ) : (
            "목소리 톤과 단어 선택, 답변의 구조를 AI가 실시간으로 분석하여 상세한 피드백을 제공합니다."
          )}
        </p>
      </div>
    </div>
  );
};

export default RecordButton;