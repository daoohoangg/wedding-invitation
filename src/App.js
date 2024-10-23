import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';import './App.css';
import Forms from './components/Forms';
import Header from './components/Header';
import LoveStory from './components/Routes/LoveStory';
import AboutFamily from './components/Routes/AboutFamily';
import Register from './components/Routes/Register';
import MainPage from './components/Routes/MainPage';

function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/love-story' element={<LoveStory />} />
        <Route path='/about-family' element={<AboutFamily />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forms' element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
