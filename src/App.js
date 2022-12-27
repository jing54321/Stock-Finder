import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './Components/Stocks/Search';
import Stocks from './Components/Stocks/Stocks'
import StockStates from './Context/Stock/StockState'

function App() {
  return (
    <StockStates>
    <Router>
      <div className="App">
        
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
