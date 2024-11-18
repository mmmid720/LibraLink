import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <Link to="/" className="logo">LibraLink</Link>
        <form>
          <div className="form-group">
            <label>아이디</label>
            <input type="text" placeholder="id" />
          </div>

          <div className="form-group">
            <label>비밀번호</label>
            <div className="password-input">
              <input type="password" placeholder="password" />
              <span className="eye-icon">👁</span>
            </div>
          </div>

          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">아이디 저장</label>
            </div>
            <div className="links">
              <a href="#">아이디 찾기</a>
              <span className="divider">|</span>
              <a href="#">비밀번호 찾기</a>
            </div>
          </div>

          <button type="submit" className="login-button">로그인</button>
          
          <div className="register">
            <button type="button" className="register-button">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;