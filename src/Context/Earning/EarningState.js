import React, {useReducer} from 'react';
import {CLEAR_EARNING, GET_EARNINGS, SET_LOADING} from '../types';
import EarningsReducer from './EarningsReducer';
import EarningContext from './EarningContext';

const EarningState = props => {
    const initialState = {
        companyEarning:[],
        loading:false
    }

    const [state, dispatch] = useReducer(EarningsReducer,initialState);

    const getEarning = (ticker,year,quarter) => {
        setLoading();
        let start;
        let end;
        console.log(year,quarter)
        switch(quarter) {
            case '1':
                start='01-01';
                end='03-31';
                break;
            case '2':
                start='04-01';
                end='06-30';
                break;
            case '3':
                start='07-01';
                end='09-30';
                break;
            case '4':
                start='10-01';
                end = '12-31';
                break;
            case 'all':
                start='01-01';
                end = '12-31';
                break;
            default:
                break;
        }

        let url = `https://finnhub.io/api/v1/calendar/earnings?from=${year}-${start}&to=${year}-${end}&symbol=${ticker}&token=c2a3bjiad3i83r33r7fg`;
        fetch(url,{
            method:'GET',
            headers: {"Content-Type":"application/x-www-form-urlencoded"}
        })
        .then(res => res.text())
        .then(res => {
            let arr = JSON.parse(res).earningsCalendar;
            let tempArray = [];
            arr.forEach(a => tempArray.unshift(a));
            dispatch({type:GET_EARNINGS, payload:tempArray})
        })
        
    }
    
    const clearEarning = () => {dispatch({type:CLEAR_EARNING})}
    const setLoading = () => {dispatch({type:SET_LOADING})}
    
  return <EarningContext.Provider value={{
    companyEarning:state.companyEarning,
    loading:state.loading,
    getEarning,
    clearEarning,
    setLoading

  }}>
   {props.children}
  </EarningContext.Provider>
}

export default EarningState
