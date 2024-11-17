const express = require('express');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors());
// JSON 데이터 파싱
app.use(express.json());

// 테스트용 API 엔드포인트
app.get('/api/test', (req, res) => {
    res.json({ message: "서버 연결 성공!" });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});