/**
 * 오디오 파일을 서버로 업로드하는 함수
 * @param {Blob} audioBlob 업로드할 오디오 파일 (WAV 포맷)
 * @returns {Promise<any>} 서버의 응답
 */
export const uploadAudio = async (audioBlob) => {
  // 백엔드 API URL (임시)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1/audio/stt';
  
  const formData = new FormData();
  
  // 'audio'라는 필드명으로 .wav 파일 추가, 파일명은 timestamp.wav
  const filename = `record_${new Date().getTime()}.wav`;
  formData.append('audio', audioBlob, filename);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      // fetch 사용시 FormData를 보낼때 Content-Type을 설정하지 않으면 
      // 브라우저가 자동으로 multipart/form-data와 올바른 boundary를 설정해줍니다.
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Audio upload failed:', error);
    throw error;
  }
};
