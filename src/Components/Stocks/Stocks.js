import React , {useContext, Fragment} from 'react';
import StockContext from '../../Context/Stock/StockContext';
import StockItem from './StockItem';
import Spinner from '../Layout/Spinner';

const Stocks = () => {

  const stockContext = useContext(StockContext);
  const {stocks, loading} = stockContext;
  if(loading) return <Spinner/>;
  const newStocks = stocks.filter(stock => stock.symbol.indexOf('.') === -1);
  if(newStocks.length===0) return <Fragment><div></div></Fragment>;
  return (
    <Fragment>
        <table>
            <thead>
                <tr>
                    <th className="text-center">Description</th><th className="text-center">Ticker</th><th className="text-center">Type</th>
                </tr>
            </thead>
            <tbody>
                {newStocks.map((stock,index) => index%2 !==0? <tr style={{backgroundColor:'#f4f4f4'}} key={stock.id}><StockItem stock={stock} /></tr> : <tr key={stock.id}><StockItem stock={stock} /></tr>)}{/*key must be in the top element.*/}
            </tbody>
        </table>
    </Fragment>
    
  )
}
export default Stocks
