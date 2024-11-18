import React, { useState, useEffect } from 'react';
import './openingHours.css';

function OpeningHours() {
  // 테스트용 시간 state 추가
  const [testMode, setTestMode] = useState(false);
  const [testHour, setTestHour] = useState(9);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkOpenStatus = () => {
      let hours;
      let timeString;
      
      if (testMode) {
        // 테스트 모드일 때는 설정된 테스트 시간 사용
        hours = testHour;
        timeString = `${String(hours).padStart(2, '0')}:00`;
      } else {
        // 실제 현재 시간 사용
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

    checkOpenStatus();
    
    if (!testMode) {
      const interval = setInterval(checkOpenStatus, 60000);
      return () => clearInterval(interval);
    }
  }, [testMode, testHour]);

  // 테스트용 시간 변경 핸들러
  const handleTestHourChange = (event) => {
    setTestHour(Number(event.target.value));
  };

  return (
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

          { /*테스트 모드 컨트롤 */ }
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

        </div>
      </div>
    </div>
  );
}

export default OpeningHours;