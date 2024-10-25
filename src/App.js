import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';import './App.css';
import Forms from './components/Forms';
import Header from './components/Header';
import LoveStory from './components/Routes/LoveStory';
import Register from './components/Routes/Register';
import MainPage from './components/Routes/MainPage';
import Schedule from './components/Schedule';
import AboutFamily from './components/Routes/AboutFamily';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    
    const audio = new Audio("https://www.dropbox.com/scl/fi/22jee2vz7mn891fww0a1a/y2mate.com-Cascada-Every-Time-We-Touch-Dream-Tunes-Cover_320.mp3?rlkey=cdkrtrs1jqlq3070tb50ju6c9&st=ayfp6dd1&dl=1");
    audio.volume = 0.5;  // Cài đặt âm lượng ở mức 50%
    audio.play().catch(error => console.log("Playback prevented by browser:", error));

    // Dừng nhạc khi component bị hủyy
    return () => {
        audio.pause();
    };
}, []);
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/love-story' element={<LoveStory />} />
        <Route path='/about-family' element={<AboutFamily />} />
        <Route path='/register' element={<Forms />} />
        <Route path='/forms' element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
