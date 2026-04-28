/**
 * 오디오 파일을 서버로 업로드하는 함수
 * @param {Blob} audioBlob 업로드할 오디오 파일 (WAV 포맷)
 * @returns {Promise<any>} 서버의 응답
 */
export const uploadAudio = async (audioBlob, questionId) => {
  // 백엔드 API URL (임시)
  const API_URL = import.meta.env.VITE_API_URL || '/api/v1/audio/stt';

  const formData = new FormData();

  // 'file'이라는 필드명으로 .wav 파일 추가 (백엔드 파라미터명과 일치해야 함)
  const filename = `record_${new Date().getTime()}.wav`;
  formData.append('file', audioBlob, filename);

  // question_id 추가
  if (questionId) {
    formData.append('question_id', questionId);
  }

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

/**
 * 서버에서 질문 목록을 가져오는 함수
 * @returns {Promise<Array>} 질문 목록
 */
export const fetchQuestions = async () => {
  const API_URL = '/api/v1/questions';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Questions fetch failed:', error);
    throw error;
  }
};

/**
 * 서버에서 모든 상세 분석 리포트를 가져오는 함수
 * @returns {Promise<any>} 리포트 데이터 목록
 */
export const fetchAllReports = async () => {
  const API_URL = `/api/v1/reports/all`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('All reports fetch failed:', error);
    throw error;
  }
};
