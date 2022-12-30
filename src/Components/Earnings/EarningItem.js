
import React, {Fragment, useContext, useEffect} from 'react';
import ResultContext from '../../Context/Result/ResultContext';

const EarningItem = ({earning, length}) => {
  const resultContext = useContext(ResultContext);
  const {showResult} = resultContext;
  useEffect(() => {
    showResult(`${length} results found`,'success');
    // eslint-disable-next-line
  },[])
  return (
    <Fragment>
        <ul className="card bg-light">
            <li>Fiscal Year : {earning.year}</li>
            <li>Quarter  : {earning.quarter}</li>
            <li>Date     : {earning.date}</li>
            <li className='text-success'>Estimate : ${earning.epsEstimate}</li>
            <li className='text-danger'>Actual   : {earning.epsActual===null? '': '$'+earning.epsActual}</li>
        </ul>
      
    </Fragment>
  )
}

export default EarningItem
