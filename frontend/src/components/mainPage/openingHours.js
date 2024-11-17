import React from 'react';
import './openingHours.css';

function OpeningHours() {
  return (
    <div className="opening-hours">
      <h2>이용시간 안내</h2>
      <div className="hours">
        <span className="time">09:00 ~ 22:00</span>
      </div>
      <div className="status">현재 운영중</div>
    </div>
  );
}

export default OpeningHours;