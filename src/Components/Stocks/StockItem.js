import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import StockContext from '../../Context/Stock/StockContext';
import ResultContext from '../../Context/Result/ResultContext';

const StockItem = ({stock}) => {
    
    const stockContext = useContext(StockContext);
    const resultContext = useContext(ResultContext)
    const {clearProfile, stocks} = stockContext;
    const {showResult, removeResult} = resultContext;
    const {description, symbol, type } = stock;
    let message = stocks.length>1? `${stocks.length} results found.`:`${stocks.length} result found.`;
    useEffect(() => {
      showResult(message,'success');
      // eslint-disable-next-line
    },[])
    const onClick = () =>  {clearProfile();removeResult()}
  return (
    <Fragment>
        <td>{description}</td>
        <td className="text-center"><Link to = {`/stocks/${symbol}`} onClick={onClick}>{symbol}</Link></td>
        <td className="text-center">{type}</td>
    </Fragment>
  )
}

export default StockItem
