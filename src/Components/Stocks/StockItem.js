import React, {Fragment} from 'react'

const StockItem = ({stock}) => {
    const {description, symbol, type } = stock;
  return (
    <Fragment>
        <td>{description}</td>
        <td className="text-center">{symbol}</td>
        <td className="text-center">{type}</td>
    </Fragment>
  )
}


export default StockItem
