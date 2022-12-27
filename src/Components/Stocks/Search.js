import React, {useContext, useState, Fragment} from 'react';
import StockContext from '../../Context/Stock/StockContext';

const Search = () => {

    const stockContext = useContext(StockContext);
    const {searchStocks, stocks, clearUser} = stockContext;
    const [text, setText] = useState('');

    const onsubmit = e => {
        e.preventDefault();
        if(text === '') return;
        searchStocks(text);
        setText('');
    }
    const onchange = e => setText(e.target.value);
    return (
        <Fragment>
        <form onSubmit={onsubmit} className="form">
            <input type="text" name="text" placeholder="Enter tickers...." onChange={onchange} value={text}/>
            <input type="submit" name="search" value="Search" className='btn btn-dark btn-block' />
        </form>
        {stocks.length > 0 && <button className="btn btn-light btn-block my-1" onClick={clearUser}>Clear</button>}
        </Fragment>
    )
}

export default Search
