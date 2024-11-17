// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/mainPage/main';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/api/test')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
       
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;