import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Forms from './components/Forms';
import Header from './components/Header'
import Banner from './components/Banner';
import Schedule from './components/Schedule';
function App() {
  return (
    <div className="App">
      {/* <Forms/> */}
      <NavBar/>
      <Header/>
      <Banner/>
      <Schedule/>
    </div>
  );
}

export default App;
