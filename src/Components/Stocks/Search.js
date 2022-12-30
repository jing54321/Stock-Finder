import React, {useContext, useState, Fragment} from 'react';
import ResultContext from '../../Context/Result/ResultContext';
import StockContext from '../../Context/Stock/StockContext';

const Search = () => {

    const stockContext = useContext(StockContext);
    const resultContext = useContext(ResultContext)
    const {searchStocks, stocks, clearStocks} = stockContext;
    const {showResult} = resultContext;
    const [text, setText] = useState('');

    const onsubmit = e => {
        e.preventDefault();
        if(text === '') {
            showResult('Please Enter Any Ticker...', 'danger')
            return;
        };
        searchStocks(text);
        setText('');
    }
    const onchange = e => setText(e.target.value);
    return (
        <Fragment>
        <form onSubmit={onsubmit} className="form" autoComplete="off">
            <input type="text" name="text" placeholder="Enter tickers...." onChange={onchange} value={text}/>
            <input type="submit" name="search" value="Search" className='btn btn-dark btn-block' />
        </form>
        {stocks.length > 0 && <button className="btn btn-light btn-block my-1" onClick={clearStocks}>Clear</button>}
        </Fragment>
    )
}

export default Search
