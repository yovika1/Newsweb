 import React, { useState } from 'react';
import "./App.css";
import  Navbar  from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import News from "./components/News";

export default function App() {
const apikey =process.env.REACT_APP_API_KEY
console.log(apikey)
const [darkMode, setDarkMode] = useState(false);

const handleToggleClick = () => {
  setDarkMode(prevDarkMode => !prevDarkMode);
};

  return (
    <Router>
      <div>
        <Navbar darkMode={darkMode} handleToggleClick={handleToggleClick} />
        <Routes>  
          <Route exact path="/" element={<News apikey={apikey}key='general' pageSize={11} country="us" category="general" darkMode={darkMode}/>} />
          <Route exact path="/technology" element={<News apiKey={apikey} key='technology' pageSize={11} country="us" category="technology" darkMode={darkMode}/>} />
          <Route exact path="/entertainment" element={<News apiKey={apikey} key='' pageSize={11} country="us" category="entertainment" darkMode={darkMode}/>} />
          <Route exact path="/general" element={<News apiKey={apikey} key='entertainment' pageSize={11} country="us" category="general" darkMode={darkMode}/>} />
          <Route exact path="/health" element={<News apiKey={apikey} key='health' pageSize={11} country="us" category="health" darkMode={darkMode}/>} darkMode={darkMode}/>
          <Route exact path="/science" element={<News  apiKey={apikey} key='science'pageSize={11} country="us" category="science" darkMode={darkMode}/>} />
          <Route exact path="/sports" element={<News apiKey={apikey} key='sports' pageSize={11} country="us" category="sports"darkMode={darkMode} />} />
          <Route exact path="/business" element={<News apiKey={apikey} key='business' pageSize={11} country="us" category="business" darkMode={darkMode}/>} />
        </Routes>
      </div>
    </Router>
  );
} 
