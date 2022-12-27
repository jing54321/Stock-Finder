import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const StockItem = ({stock}) => {
    const {description, symbol, type } = stock;
  return (
    <Fragment>
        <td>{description}</td>
        <td className="text-center"><Link to = {`/stocks/${symbol}`} >{symbol}</Link></td>
        <td className="text-center">{type}</td>
    </Fragment>
  )
}

export default StockItem
