import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import StockContext from '../../Context/Stock/StockContext';

const StockItem = ({stock}) => {
    
    const stockContext = useContext(StockContext);
    const {clearProfile} = stockContext;
    const {description, symbol, type } = stock;
    const onClick = () => clearProfile();
  return (
    <Fragment>
        <td>{description}</td>
        <td className="text-center"><Link to = {`/stocks/${symbol}`} onClick={onClick}>{symbol}</Link></td>
        <td className="text-center">{type}</td>
    </Fragment>
  )
}

export default StockItem
