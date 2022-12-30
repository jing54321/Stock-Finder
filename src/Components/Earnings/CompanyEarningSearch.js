import React, {useContext, Fragment, useState} from 'react';
import EarningContext from '../../Context/Earning/EarningContext';
import ResultContext from '../../Context/Result/ResultContext';

const CompanyEarningSearch = () => {

    const today = new Date();
    const currentYear = today.getMonth()>10? today.getFullYear()+1:today.getFullYear();
    //const month = today.getMonth();
    //const currentQuarter = month<3? '1': (month<6? '2' : (month<9? '3' : '4'));

    const earningContext = useContext(EarningContext);
    const resultContext = useContext(ResultContext);
    const {getEarning, companyEarning, clearEarning, loading} = earningContext;
    const {showResult} = resultContext;
    const [ticker, setTicker] = useState('');
    const [year, setYear] = useState(currentYear);
    const [quarter, setQuarter] = useState('all');

    const onsubmit = (e) => {
        e.preventDefault();
        if(ticker==='') {
            showResult('Please Enter Any Ticker...', 'danger')
            return;
        }
        getEarning(ticker,year,quarter);
        setTicker('');
    }

    const onchange = (e) => setTicker(e.target.value);
    const onYearChange = (e) => setYear(e.target.value);
    const onQuarterChange = (e) => setQuarter(e.target.value);

  return (
    <Fragment>
      <form className="form my-1" onSubmit={onsubmit} autocomplete="off">
        <div style={formStyle}>
            <label style={{width:'4rem'}} htmlFor="ticker" >Ticker : </label>
            <input style={{flex: 1, margin:'0'}} id ="ticker" type="text" name="text" placeholder='Enter ticker...' value={ticker} onChange={onchange}/>
        </div>
        <div className="my-1" style={formStyle}>
            <label style={{width:'4rem'}} htmlFor="year">Year : </label>
            <select defaultValue={currentYear} style={{flex: 1}} id="year" onChange={onYearChange}>
                <option>{currentYear}</option>
                <option>{currentYear + 1}</option>
                <option>{currentYear+2}</option>
            </select>
        </div>
        <div className="my-1" style={formStyle}>
            <label style={{width:'4rem'}} htmlFor="quarter">Quarter : </label>
            <select style={{flex: 1}} defaultValue={'all'} id="quarter" onChange={onQuarterChange}>
                <option value='1'>1Q</option>
                <option value='2'>2Q</option>
                <option value='3'>3Q</option>
                <option value='4'>4Q</option>
                <option value='all'>All</option>
            </select>
        </div>
        <div>
         <input type="submit" value="Search" className='btn btn-dark btn-block'/>
        </div>
      </form> 
      {!loading && companyEarning.length > 0 && <button className="btn btn-light btn-block my-1" onClick={clearEarning}>Clear</button>}
    </Fragment>
  )
}

const formStyle ={
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems:'center', 
    gap:'2rem'
}


export default CompanyEarningSearch
