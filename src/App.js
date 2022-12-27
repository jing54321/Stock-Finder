import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import StockProfile from './Components/Stocks/StockProfile';
import NavBar from './Components/Layout/NavBar';
import About from './Components/Pages/About';
import StockStates from './Context/Stock/StockState';
import News from './Components/News/News';

function App() {
  return (
    <StockStates>
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/stocks/:ticker' element={<><StockProfile/><News/></>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </StockStates>
  );
}

export default App;
