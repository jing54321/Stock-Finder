import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Earnings from './Components/Pages/Earnings';
import StockProfile from './Components/Stocks/StockProfile';
import About from './Components/Pages/About';
import NavBar from './Components/Layout/NavBar';
import NotFound from './Components/Pages/NotFound';
import Result from './Components/Result/Result';
import StockStates from './Context/Stock/StockState';
import EarningState from './Context/Earning/EarningState';
import ResultState from './Context/Result/ResultState';
import News from './Components/News/News';


function App() {
  return (
    <StockStates>
    <EarningState>
    <ResultState>
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Result/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Earnings' element={<Earnings/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/stocks/:ticker' element={<><StockProfile/><News/></>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </ResultState>
    </EarningState>
    </StockStates>
  );
}

export default App;
