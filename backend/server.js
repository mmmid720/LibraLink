const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 메인 라우트
app.get('*', (req, res) => {
    res.sendFile(path.jopin(__dirname, '../frontend/src/App.js'));
})

// JSON 데이터 파싱
app.use(express.json());


app.listen(8080, () => {
    console.log('서버 시작중... 포트번호: 8080');
});