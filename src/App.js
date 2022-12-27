import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './Components/Stocks/Search';
import Stocks from './Components/Stocks/Stocks';
import NavBar from './Components/Layout/NavBar';
import StockStates from './Context/Stock/StockState';

function App() {
  return (
    <StockStates>
    <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<><Search/><Stocks/></>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </StockStates>
    
  );
}

export default App;
