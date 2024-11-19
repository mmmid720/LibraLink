const express = require('express');
const connectDB = require('./config/db');

const path = require('path');
const app = express();

// 몽고DB 연결
connectDB();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 메인 라우트
app.get('*', (req, res) => {
    res.sendFile(path.jopin(__dirname, '../frontend/src/App.js'));
})

app.listen(8080, () => {
    console.log('서버 시작중... 포트번호: 8080');
});