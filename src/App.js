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
    const audio = new Audio("https://www.dropbox.com/scl/fi/vwuj7ih3w6vbgertoyxcx/y2mate.com-Cascada-Every-Time-We-Touch-Dream-Tunes-Cover_320.mp3?rlkey=nn8x0g1pye831nqy355iobi0r&st=k97refgt&dl=1");
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Playback prevented by browser:", error));

    // Đảm bảo dừng nhạc khi component bị hủy
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
