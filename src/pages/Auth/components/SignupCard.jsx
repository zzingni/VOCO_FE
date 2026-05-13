import { useEffect } from "react";
import { kakaoLoginAPI } from "../../../utils/api";

const SignupCard = () => {
  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      alert("카카오 SDK(스크립트)가 아직 로드되지 않았거나 차단되었습니다. 잠시 후 다시 시도해주세요.");
      return;
    }
    
    if (!window.Kakao.isInitialized()) {
      const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
      if (!kakaoKey) {
        alert("환경변수(VITE_KAKAO_JS_KEY)가 로드되지 않았습니다. 터미널에서 서버를 껐다 다시 켜주세요.");
        return;
      }
      try {
        window.Kakao.init(kakaoKey);
      } catch (error) {
        alert("카카오 로그인을 초기화하는 데 실패했습니다. 올바른 JavaScript 키인지 확인해주세요.");
        return;
      }
    }

    try {
      window.Kakao.Auth.login({
        success: async function (authObj) {
          try {
            await kakaoLoginAPI(authObj.access_token);
            window.location.href = "/dashboard";
          } catch (error) {
            alert("로그인 처리 중 서버 오류가 발생했습니다.");
          }
        },
        fail: function (err) {
          console.error("카카오 로그인 실패:", err);
          alert(`카카오 로그인에 실패했습니다: ${JSON.stringify(err)}`);
        },
      });
    } catch (err) {
      alert(`카카오 로그인 실행 중 오류가 발생했습니다: ${err.message}`);
    }
  };
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 md:p-12 flex flex-col items-center text-center">
      {/* Icon/Branding */}
      <div className="mb-8 p-4 bg-surface-container-low rounded-full">
        <span className="material-symbols-outlined text-primary text-4xl" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>

      {/* Header Typography */}
      <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-4">
        voco 시작하기
      </h1>
      <p className="text-on-surface-variant leading-relaxed mb-10 max-w-[280px] md:max-w-xs mx-auto">
        계정으로 간편하게 가입하고 <br className="hidden md:block" />
        <span className="text-primary font-semibold">AI 면접 코칭</span>을 받아보세요
      </p>

      {/* Kakao Primary Action */}
      <button 
        onClick={handleKakaoLogin}
        className="w-full bg-kakao-yellow hover:bg-[#F7D600] text-black font-semibold py-4 px-6 rounded-full flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-md mb-6"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C7.029 3 3 6.128 3 9.99c0 2.49 1.666 4.67 4.148 5.918l-.946 3.477c-.053.195.176.357.333.25l4.085-2.695c.448.067.907.103 1.38.103 4.971 0 9-3.128 9-6.99C21 6.128 16.971 3 12 3z"></path>
        </svg>
        <span className="text-lg">카카오로 1초 만에 시작하기</span>
      </button>

      {/* Footer Links */}
      <div className="mt-10 flex flex-col gap-6 text-sm">
        <p className="text-on-surface-variant">
          이미 계정이 있으신가요?
          <a className="text-primary font-bold ml-1 hover:underline underline-offset-4" href="#">로그인</a>
        </p>
        <div className="h-[1px] w-full bg-outline-variant/10"></div>
        <p className="text-slate-400 leading-relaxed text-[11px] px-4">
          가입 시 voco의 <a className="underline" href="#">이용약관</a> 및 <a className="underline" href="#">개인정보 처리방침</a>에 동의하는 것으로 간주합니다.
        </p>
      </div>
    </div>
  );
};

export default SignupCard;
