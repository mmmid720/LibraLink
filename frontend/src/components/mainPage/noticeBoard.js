import React from 'react';
import './noticeBoard.css';

function NoticeBoard() {
  const notices = [
    {
      text: "11월 강릉문화의 집 어린이주말문화체험 <역사야 함께 놀자!>",
      date: "2024.11.02"
    },
    {
      text: "강릉책문화센터 11월 개강 프로그램 안내",
      date: "2024.11.01"
    },
    {
      text: "강릉책문화센터 10월 공감콘서트 <김소영 작가, 어린이라는 세계>",
      date: "2024.10.20"
    },
    {
      text: "강릉책문화센터 10월 공감 콘서트 <김소영 작가와의 만남>",
      date: "2024.10.15"
    },
    {
      text: "10월 19일 토요일 열린도서관 북적북적 취소 안내(올해 행사 종료)",
      date: "2024.10.12"
    },
    {
      text: "10월 강릉작가, 홍송자 작가와의 만남",
      date: "2024.10.01"
    },
    {
      text: "[강릉문화의집 특별프로그램] 내 손으로 만드는, 행복의 나날 캘린더",
      date: "2024.09.27"
    },
    // ... 더 많은 공지사항
  ];

  return (
    <div className="notice-board">
      <div className="notice-header">
        <h2>공지사항</h2>
        <button className="more-btn">
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 8V32M8 20H32"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index}>
            <div className="notice-item">
              <span className="notice-text">{notice.text}</span>
              <span className="notice-date">{notice.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoticeBoard;