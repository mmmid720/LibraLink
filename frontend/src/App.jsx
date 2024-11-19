import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Main from './components/mainPage/main';
import Signup from './components/signupPage/signup';
import Login from './components/loginPage/login';

const App = () => {
 const [message, setMessage] = useState("");
 const [error, setError] = useState(null);

 const fetchData = async () => {
   try {
     const response = await axios.get('http://localhost:8080/api/test');
     setMessage(response.data.message);
   } catch (err) {
     console.error('Error:', err);
     setError(err);
   }
 };

 useEffect(() => {
   fetchData();
 }, []);

 return (
   <React.Fragment>
          <Router>
                  <Routes>
                          <Route path="/" element={<Main />}/>
                          <Route path="/signup" element={<Signup />}/>
                          <Route path="/login" element={<Login />}/>
                  </Routes>
          </Router>
   </React.Fragment>
 );
};

export default App;