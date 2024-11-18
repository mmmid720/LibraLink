import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './signup.css';

function Signup() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
    <Helmet>
      <title>LibraLink - 회원가입</title>
    </Helmet>
      <div className="signup-container">
        <div className="signup-box">
              <Link to="/" className="logo">LibraLink</Link>
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
                  {showTerms && (
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
                  )}
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
                  {showPrivacy && (
                    <div className="modal">
                      <div className="modal-content">
                        <h2>이용약관</h2>

                        <div className="section-title">제1조(목적)</div>
                        <div className="section-content">
                          이 약관은 LibraLink 도서관 홈페이지가 제공하는 서비스(이하 “서비스”)의 이용 조건, 절차 및 기타 제반 사항을 규정하는 것을 목적으로 합니다.
                        </div>

                        <div className="section-title">제2조(정의)</div>
                        <div className="section-content">
                          ①이 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.
                          <p>1. 이용자 : 본 약관에 따라 도서관 홈페이지가 제공하는 서비스를 받는 준회원 및 정회원</p>
                          <p>2. 가입 : 도서관이 제공하는 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용신청을 완료시키는 행위</p>
                          <p>3. 회원 : 도서관에 회원가입에 필요한 개인정보(실명확인)를 제공하여 회원 등록을 한 자</p>
                          <p>4. 준회원 : 홈페이지에서 실명인증을 거쳐 가입한 홈페이지 회원으로 각종 게시판 글쓰기 및 독서문화프로그램 신청, 디지털자료실 서비스 이용이 가능한 회원</p>
                          <p>5. 정회원 : 홈페이지 회원가입 후 도서관에 직접 방문하여 본인확인절차(신분증 제시)를 통해 회원카드가 발급된 회원으로 도서대출 및 도서관 홈페이지의 모든 서비스 이용이 가능한 회원</p>
                          <p>6. 서비스 : 도서관이 이용자에게 온/오프라인으로 제공하는 도서관 이용편의 및 정보</p>
                          <p>7. 이용자번호(ID) : 회원 식별과 회원의 서비스 이용을 위하여 이용자가 선택하고 도서관이 확인하는 영문자와 숫자의 조합(1인 1개의 ID만 발급 가능)</p>
                          <p>8. 비밀번호(PASSWORD) : 회원의 정보보호를 위해 이용자가 설정한 문자와 숫자, 특수문자 등으로 조합된 부호</p>
                          <p>9. 이용해지(탈퇴) : 도서관 및 도서관 이용 회원이 도서관 서비스 이용을 종료시키는 의사표시</p>
                        </div>

                        <div className="section-title">제3조(약관의 효력과 변경)</div>
                        <div className="section-content">
                          ① 이 약관은 서비스 화면에 게시 또는 기타의 방법으로 공지함으로써 이용자에게 공시되고, 이에 동의한 이용자가 서비스에 가입함으로써 효력이 발생하며, 도서관은 필요하다고 인정되는 경우 관련 법령에 위배되지 않는 범위 내에서 이 약관의 내용을 개정할 수 있고, 개정된 약관은 정당한 절차에 따라 서비스 화면에 공지됩니다.
                          ② 이용자가 변경된 약관에 동의하지 않는 경우 회원 가입을 거부할 수 있으며, 계속 사용하시는 경우에는 약관 변경에 동의한 것으로 간주하고, 변경된 약관은 전항과 같은 방법으로 효력이 발생합니다.
                          ③ 회원은 정기적으로 사이트를 방문하여 약관 변경여부를 확인하여야 합니다. 변경된 약관에 대한 정보를 인지하지 못해 발생하는 회원의 피해는 도서관에서 책임지지 않습니다.
                          ④ 도서관은 필요한 경우 개별 서비스에 대하여 약관 및 이용규정(이하 ‘서비스별 안내’)을 정할 수 있으며 본 약관과 서로 상충되는 경우에는 서비스별 안내의 내용이 우선 적용됩니다.
                          ⑤ 이 약관에 명시되지 않은 사항에 대해서는 관계 법률 및 기타법령의 규정에 따릅니다.
                        </div>

                        <div className="section-title">제4조(이용신청)</div>
                        <div className="section-content">
                          이용신청은 도서관홈페이지의 회원등록 화면에서 이용자가 도서관에서 요구하는 신청양식 작성과 이용약관 및 개인정보 제공에 대한 동의로 신청합니다.
                        </div>

                        <button onClick={() => setShowPrivacy(false)}>닫기</button>
                      </div>
                    </div>
                  )}
                </div>

                <button type="submit" className="submit-button">가입하기</button>
              </form>
          </div>
      </div>
    </>
  );
}

export default Signup;