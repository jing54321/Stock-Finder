
import React, {Fragment, useEffect, useContext} from 'react';
import CompanyEarningSearch from '../Earnings/CompanyEarningSearch';
import CompanyEarning from '../Earnings/CompanyEarning';
import ResultContext from '../../Context/Result/ResultContext';


const Earnings = () => {
  const resultContext = useContext(ResultContext)
  const {removeResult} = resultContext;
  useEffect(() => {
    removeResult();
    // eslint-disable-next-line
  },[])
 
  return (
    <Fragment>
      <CompanyEarningSearch/>
      <CompanyEarning/>
    </Fragment>
  )
}
export default Earnings
