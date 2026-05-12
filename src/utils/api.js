/**
 * 오디오 파일을 서버로 업로드하는 함수
 * @param {Blob} audioBlob 업로드할 오디오 파일 (WAV 포맷)
 * @returns {Promise<any>} 서버의 응답
 */
/**
 * 서버에 음성 파일을 업로드하고 STT 및 피드백을 요청하는 함수
 * @param {Blob} audioBlob - 녹음된 오디오 Blob
 * @param {number|string} questionId - 현재 질문의 ID
 * @param {number|string} interviewId - 현재 진행 중인 면접의 ID
 * @returns {Promise<Object>} 서버 응답 결과 (STT 텍스트, 피드백 등)
 */
export const uploadAudio = async (audioBlob, questionId, interviewId) => {
  const API_URL = '/api/v1/audio/stt';

  const formData = new FormData();
  // 백엔드가 기대하는 파라미터명과 일치해야 함
  const filename = `record_${new Date().getTime()}.wav`;
  formData.append('file', audioBlob, filename);

  if (questionId) formData.append('question_id', questionId);
  if (interviewId) formData.append('interview_id', interviewId);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData, // FormData는 브라우저가 자동으로 multipart/form-data 헤더를 설정함
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Upload successful:', data);
    return data;
  } catch (error) {
    console.error('Audio upload error:', error);
    throw error;
  }
};

/**
 * 면접 세션을 새로 시작하는 함수
 * @param {number|string} fieldId - 선택된 분야 ID
 * @returns {Promise<Object>} { message, interview_id }
 */
export const startInterview = async (fieldId) => {
  const API_URL = '/api/v1/interview/start';

  const formData = new FormData();
  if (fieldId) {
    formData.append('field_id', fieldId);
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('면접 시작 실패');
    return await response.json();
  } catch (error) {
    console.error('Start interview error:', error);
    throw error;
  }
};

/**
 * 진행 중인 면접 세션을 종료하는 함수
 * @param {number|string} interviewId - 종료할 면접 ID
 * @returns {Promise<Object>} { message, interview_id }
 */
export const endInterview = async (interviewId) => {
  if (!interviewId) return;
  const API_URL = `/api/v1/interview/end/${interviewId}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST'
    });
    if (!response.ok) throw new Error('면접 종료 실패');
    return await response.json();
  } catch (error) {
    console.error('End interview error:', error);
  }
};

/**
 * 서버에서 질문 목록을 가져오는 함수
 * @param {number|string} fieldId - (선택) 질문을 가져올 분야 ID
 * @returns {Promise<Array>} 질문 목록
 */
export const fetchQuestions = async (fieldId = null) => {
  // 백엔드 API 명세에 맞춰 fieldId 쿼리스트링 사용
  const API_URL = fieldId ? `/api/v1/questions?fieldId=${fieldId}` : '/api/v1/questions';

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
 * 서버에서 면접 분야 목록을 가져오는 함수
 * @returns {Promise<Array>} 분야 목록
 */
export const fetchFields = async () => {
  const API_URL = '/api/v1/field';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fields fetch failed:', error);
    throw error;
  }
};

/**
 * 서버에서 특정 면접의 상세 분석 리포트를 가져오는 함수
 * @param {number|string} interviewId
 * @returns {Promise<any>} 리포트 데이터
 */
export const fetchReportDetail = async (interviewId) => {
  const API_URL = `/api/v1/reports/${interviewId}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Report fetch failed for id ${interviewId}:`, error);
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

/**
 * 서버에서 면접 히스토리를 가져오는 함수
 * @returns {Promise<Object>} 히스토리 데이터
 */
export const fetchInterviewHistory = async () => {
  // 백엔드 명세에 따른 라우터 주소
  const API_URL = '/api/v1/interview/history';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('History fetch failed:', error);
    throw error;
  }
};
