import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = "홍길동";
  
  const profileMenu = [
    { title: '프로필 설정', path: '/profile/settings' },
    { title: '알림', path: '/profile/notifications' },
  ];
  const menuItems = [
    {
      id: 'best',
      title: '인기 도서',
      items: [
        {
          title: '월간 인기도서',
          description: '이번 달 가장 인기있는 도서!',
          icon: '⭐',
          path: '/monthlybestbook'
        },
        {
          title: '주간 인기도서',
          description: '이번 주 가장 인기있는 도서!.',
          icon: '🔥',
          path: '/weeklybestbook'
        },
      ]
    },
    {
      id: 'community',
      title: '열린마당',
      items: [
        {
          title: '공지사항',
          description: '도서관 공지 안내',
          icon: '📢',
          path: '/noticeboard'
        },
        {
          title: '자유 게시판',
          description: '자유롭게 작성하는 게시판',
          icon: '🌍',
          path: '/freeboard'
        },
      ]
    },
    {
      id: 'info',
      title: '도서관 안내',
      items: [
        {
          title: '이용 안내',
          description: '도서관 이용 안내와 제제 규칙',
          icon: '❗',
          path: '/libraryinfo'
        },
      ]
    },
    {
      id: 'suggestion',
      title: '건의사항',
      items: [
        {
          title: '건의사항 게시판',
          description: '건의사항 작성 및 확인',
          icon: '🙋',
          path: '/suggestionboard'
        },
        {
          title: '희망도서 게시판',
          description: '신청한 희망도서와 현황을 확인',
          icon: '📘',
          path: '/hopeboard'
        },
      ]
    },
    {
      id: 'mypage',
      title: '마이페이지',
      items: [
        {
          title: '내 서재',
          description: '대출 현황과 대출 이력을 확인',
          icon: '📚',
          path: '/mylibrary'
        },
        {
          title: '관심 도서',
          description: '관심도서로 추가한 도서 목록을 확인',
          icon: '🔖',
          path: '/mybookmark'
        },
      ]
    }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-text">LibraLink</span>
      </Link>

      <div className="navbar-menu">
        {menuItems.map((menu) => (
          <div 
            key={menu.id}
            className="menu-item"
            onMouseEnter={() => setActiveMenu(menu.id)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="menu-button">
              {menu.title}
              <svg className="menu-arrow" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" />
              </svg>
            </button>

            <div className={`dropdown-menu ${activeMenu === menu.id ? 'active' : ''}`}>
              <div className="dropdown-header">
                <h3>{menu.title}</h3>
                <p>원하시는 메뉴를 선택해주세요</p>
              </div>
              
              <div className="dropdown-content">
                {menu.items.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.path}
                    className="dropdown-item"
                  >
                    <span className="item-icon">{item.icon}</span>
                    <div className="item-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                    <svg className="item-arrow" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="navbar-auth">
        {!isLoggedIn ? (
          <>
          <button className="login-btn" onClick={() => navigate('/login')}>
            <svg 
              className="login-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            로그인
          </button>
            <Link to="/signup" className="signup-btn">회원가입</Link>
          </>
        ) : (
          <div className="profile-menu-container">
            <div className="profile-button">
              <span className="user-name">{userName}</span>
              <span className="profile-name">님</span>
              <div className="profile-dropdown">
                {profileMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="profile-dropdown-item"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="profile-dropdown-divider"></div>
                <button 
                  className="profile-dropdown-item" 
                  onClick={() => setIsLoggedIn(false)}
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;