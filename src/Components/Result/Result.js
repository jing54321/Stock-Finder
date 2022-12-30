import React, {useContext, Fragment} from 'react';
import ResultContext from '../../Context/Result/ResultContext';

const Result = () => {
    const resultContext = useContext(ResultContext);
    const {result} =  resultContext; 
    
  return (
    <Fragment>
        {
           result!==null? <h4 style={{height:'20px'}} className={`text-${result.type}`}>{result.msg}</h4> : <p style={{height:'20px'}}></p>
        }
       
    </Fragment>
  )
}

export default Result
