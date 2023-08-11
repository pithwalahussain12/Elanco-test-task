import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Application from './pages/Application';
import Header from './components/Header';
import ApplicationDetail from './pages/ApplicationDetail';
import ResoursesDetail from './pages/ResoursesDetail';


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      {/* pages route */}
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/applicationdetail/:name" element={<ApplicationDetail />} />
        <Route path="/resoursesdetail/:name" element={<ResoursesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
