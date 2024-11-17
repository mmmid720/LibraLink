import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../footer';

import './signup.css';

function Signup() {
  return (
    <>
    <Helmet>
      <title>LibraLink - 회원가입</title>
    </Helmet>
      <div className="signup-container">
        <div className="logo">LibraLink</div>
        
        <form>
          <div className="form-group">
            <label>아이디</label>
            <div className="input-with-button">
              <input type="text" placeholder="영문으로만 작성하세요." />
              <button type="button" className="check-button">중복확인</button>
            </div>
          </div>

          <div className="form-group">
            <label>비밀번호</label>
            <input 
              type="password" 
              placeholder="8자 이상, 숫자 및 기호의 조합이어야 합니다."
            />
          </div>

          <div className="form-group">
            <label>이름</label>
            <input type="text" placeholder="홍길동" />
          </div>

          <div className="form-group">
            <label>이메일</label>
            <div className="input-with-button">
              <input type="email" placeholder="email1234@gmail.com" />
              <button type="button" className="check-button">인증하기</button>
            </div>
          </div>

          <div className="form-group">
            <label>인증번호</label>
            <input type="text" placeholder="" />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">개인정보처리방침</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">이용약관</label>
          </div>

          <button type="submit" className="submit-button">가입하기</button>
        </form>
      </div>
      <div className="footer-signup-box-box"></div>
      <div className="footer-signup-box">
              <Footer />
      </div>

    </>
  );
}

export default Signup;