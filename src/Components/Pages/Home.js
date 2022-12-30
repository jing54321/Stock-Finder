import React, {Fragment, useContext, useEffect} from 'react';
import Search from '../Stocks/Search';
import Stocks from '../Stocks/Stocks';
import ResultContext from '../../Context/Result/ResultContext';

const Home = () => {
  const resultContext = useContext(ResultContext)
  const {removeResult} = resultContext;
  useEffect(() => {
    removeResult();
    // eslint-disable-next-line
  },[])
  return (
    <Fragment>
      <Search/>
      <Stocks/>
    </Fragment>
  )
}

export default Home
