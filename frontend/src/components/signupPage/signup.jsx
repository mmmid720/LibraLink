import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './signup.css';

const Signup = () => {
 const [showTerms, setShowTerms] = useState(false);
 const [showPrivacy, setShowPrivacy] = useState(false);

 const renderTermsModal = () => (
   <div className="modal">
     <div className="modal-content">
       <h2>개인정보처리방침</h2>

       <div className="section-title">제1조(회원 가입을 위한 정보)</div>
       <div className="section-content">
         회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.
         <p>1. 필수 수집 정보: 이메일 주소, 비밀번호, 이름 및 닉네임</p>
       </div>

       <div className="section-title">제2조(본인 인증을 위한 정보)</div>
       <div className="section-content">
         회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.
         <p>1. 필수 수집 정보: 이메일 및 이름</p>
       </div>

       <div className="section-title">제3조(서비스 이용 및 부정 이용 확인을 위한 정보)</div>
       <div className="section-content">
         회사는 이용자의 서비스 이용에 따른 통계, 분석 및 부정이용의 확인, 분석을 위하여 다음과 같은 정보를 수집합니다.
         <p>1. 필수 수집 정보: 서비스 이용기록</p>
       </div>

       <button onClick={() => setShowTerms(false)}>닫기</button>
     </div>
   </div>
 );

 const renderPrivacyModal = () => (
   <div className="modal">
     <div className="modal-content">
       <h2>이용약관</h2>
       
       <div className="section-title">제1조(목적)</div>
       <div className="section-content">
         이 약관은 LibraLink 도서관 홈페이지가 제공하는 서비스(이하 "서비스")의 이용 조건, 절차 및 기타 제반 사항을 규정하는 것을 목적으로 합니다.
       </div>

       {/* 약관 내용 생략 - 필요시 원본 내용 추가 */}
       
       <button onClick={() => setShowPrivacy(false)}>닫기</button>
     </div>
   </div>
 );

 const renderForm = () => (
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
       <button 
         type="button" 
         className="toggle-button" 
         onClick={() => setShowTerms(!showTerms)}
       >
         펼치기
       </button>
       {showTerms && renderTermsModal()}
     </div>

     <div className="checkbox-group">
       <input type="checkbox" id="privacy" />
       <label htmlFor="privacy">이용약관</label>
       <button 
         type="button" 
         className="toggle-button" 
         onClick={() => setShowPrivacy(!showPrivacy)}
       >
         펼치기
       </button>
       {showPrivacy && renderPrivacyModal()}
     </div>

     <button type="submit" className="submit-button">가입하기</button>
   </form>
 );

 return (
   <React.Fragment>
     <Helmet>
       <title>LibraLink - 회원가입</title>
     </Helmet>
     <div className="signup-container">
       <div className="signup-box">
         <Link to="/" className="logo">LibraLink</Link>
         {renderForm()}
       </div>
     </div>
   </React.Fragment>
 );
};

export default Signup;