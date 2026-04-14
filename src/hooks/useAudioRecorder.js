import { useState, useRef, useCallback } from 'react';
import RecordRTC from 'recordrtc';

const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(null);
  const recorderRef = useRef(null);
  const streamRef = useRef(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // RecordRTC 설정 (WAV 포맷)
      const recorder = new RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/wav',
        recorderType: RecordRTC.StereoAudioRecorder,
        numberOfAudioChannels: 1, // 음성 인식에 좋은 모노 오디오 사용
        desiredSampRate: 16000,
      });

      recorder.startRecording();
      recorderRef.current = recorder;
      setIsRecording(true);
      setError(null);
    } catch (err) {
      console.error("마이크 접근 권한 요청 실패:", err);
      setError("마이크 접근 권한이 없거나 지원하지 않는 브라우저입니다.");
    }
  }, []);

  const stopRecording = useCallback(() => {
    return new Promise((resolve) => {
      if (recorderRef.current && isRecording) {
        recorderRef.current.stopRecording(() => {
          const blob = recorderRef.current.getBlob();
          // 스트림 종료(마이크 사용 종료) 처리
          if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
          }
          recorderRef.current = null;
          setIsRecording(false);
          resolve(blob);
        });
      } else {
        resolve(null);
      }
    });
  }, [isRecording]);

  const toggleRecording = useCallback(async () => {
    if (isRecording) {
      return await stopRecording();
    } else {
      await startRecording();
      return null;
    }
  }, [isRecording, startRecording, stopRecording]);

  return {
    isRecording,
    error,
    startRecording,
    stopRecording,
    toggleRecording
  };
};

export default useAudioRecorder;
