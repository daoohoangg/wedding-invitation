import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Forms from './components/Forms';
import Header from './components/Header'
import Banner from './components/Banner';
import Schedule from './components/Schedule';
import Location from './components/Location';
import LoveStory from './components/Routes/LoveStory';
import AboutFamily from './components/Routes/AboutFamily';
import Register from './components/Routes/Register';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Schedule/>
      <Location/>
        {/* <Routes>
          <Route path='/love-story' element ={<LoveStory/>}/>
          <Route path='/about-family' element ={<AboutFamily/>}/>
          <Route path='/register' element ={<Register/>}/>
          <Route path='/forms' element ={<Forms/>}/>
        </Routes> */}
         
    </div>    

  );
}

export default App;
