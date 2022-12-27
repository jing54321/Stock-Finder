import React, {Fragment} from 'react';
import Search from '../Stocks/Search';
import Stocks from '../Stocks/Stocks';

const Home = () => {
  return (
    <Fragment>
      <Search/>
      <Stocks/>
    </Fragment>
  )
}

export default Home
