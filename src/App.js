 import React from 'react';
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import News from "./components/News";

export default function App() {
  // console.log('Rendering App');

  return (
    <Router>
      <div>
        <Navbar />
        {/* <News pageSize={11} country="us" category="general" /> */}
        <Routes>  
          <Route exact path="/" element={<News key='general' pageSize={11} country="us" category="general" />} />
          <Route exact path="/technology" element={<News key='technology' pageSize={11} country="us" category="technology" />} />
          <Route exact path="/entertainment" element={<News key='' pageSize={11} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News key='entertainment' pageSize={11} country="us" category="general" />} />
          <Route exact path="/health" element={<News key='health' pageSize={11} country="us" category="health" />} />
          <Route exact path="/science" element={<News  key='science'pageSize={11} country="us" category="science" />} />
          <Route exact path="/sports" element={<News key='sports' pageSize={11} country="us" category="sports" />} />
          <Route exact path="/business" element={<News key='business' pageSize={11} country="us" category="business" />} />
        </Routes>
      </div>
    </Router>
  );
} 