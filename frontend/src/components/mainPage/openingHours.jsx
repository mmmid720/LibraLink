import React, { useState, useEffect } from 'react';
import './openingHours.css';

const OpeningHours = () => {
  const [testMode, setTestMode] = useState(false);
  const [testHour, setTestHour] = useState(9);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const checkOpenStatus = () => {
    let hours;
    let timeString;
    
    if (testMode) {
      hours = testHour;
      timeString = `${String(hours).padStart(2, '0')}:00`;
    } else {
      const now = new Date();
      hours = now.getHours();
      timeString = now.toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
    
    setCurrentTime(timeString);
    setIsOpen(hours >= 9 && hours < 22);
  };

  useEffect(() => {
    checkOpenStatus();
    if (!testMode) {
      const interval = setInterval(checkOpenStatus, 60000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testMode, testHour]);

  const handleTestHourChange = (event) => {
    setTestHour(Number(event.target.value));
  };

  /* 테스트모드 박스 */
  const renderTestControls = () => (
    <div className="test-mode-container">
      <div className="test-controls">
        <label>
          <input 
            type="checkbox" 
            checked={testMode} 
            onChange={(e) => setTestMode(e.target.checked)} 
          />
          테스트 모드
        </label>
        {testMode && (
          <input 
            type="number" 
            min="0" 
            max="23" 
            value={testHour}
            onChange={handleTestHourChange}
          />
        )}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="opening-hours">
        <div className="content-wrapper">
          <h2>이용시간 안내</h2>
          <div className="time-container">
            <div className="time-badge">
              <span className="time">09:00 ~ 22:00</span>
            </div>
            <div className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
              <span className="dot"></span>
              <span className="status">
                {isOpen ? '현재 운영중' : '현재 마감'}
              </span>
            </div>
            <div className="current-time">
              현재 시간: {currentTime}
            </div>
            {renderTestControls()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OpeningHours;