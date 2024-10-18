import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Forms from './components/Forms';
function App() {
  return (
    <div className="App">
      <Forms/>
      <NavBar/>
    </div>
  );
}

export default App;
