import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/mainPage/main';
import Signup from './components/signupPage/signup';

import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/test')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
            <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/signup" element={<Signup />}/>
            </Routes>
    </Router>
  );
}

export default App;