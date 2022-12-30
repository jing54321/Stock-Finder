import React, {Fragment, useContext} from 'react';
import EarningItem from './EarningItem';
import EarningContext from '../../Context/Earning/EarningContext';
import Spinner from '../Layout/Spinner';

const CompanyEarning = () => {
   const earningContext = useContext(EarningContext);
   const {companyEarning, loading} = earningContext;
   if(loading) return <Spinner/>
  return (
    <Fragment>
        <h3>{companyEarning.length===0?'Earnings':companyEarning[0].symbol+' Earnings'}</h3>
        <div className={`grid-${companyEarning.length}`}>
            {companyEarning.map(earning => <EarningItem earning={earning} length={companyEarning.length} key={earning.date}/> )}
        </div>
    </Fragment>
    
  )
}
export default CompanyEarning
 /*
    const d = new Date();//today 
    const s = new Date(d.getTime());//copy of today for start (sunday)
    const e = new Date(d.getTime());//copy of today for end (saturday)
    s.setDate(s.getDate()-s.getDay())// start day of this week
    e.setDate(e.getDate()+(6-e.getDay()))// end day of this week
    const [start, setStart] = useState(`${s.getFullYear()}-${s.getMonth() + 1}-${s.getDate()}`);
    const [end, setEnd] = useState(`${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`);
    const [cnt, setCnt] = useState(0);
    const next = () => {
        let newCnt = cnt+1;
        d.setDate(d.getDate() + 7*newCnt);
        let st = new Date(d.getTime());
        let en = new Date(d.getTime());
        st.setDate(st.getDate()-st.getDay())
        en.setDate(en.getDate()+(6-en.getDay()))
        setStart(`${st.getFullYear()}-${st.getMonth()+1}-${st.getDate()}`);
        setEnd(`${en.getFullYear()}-${en.getMonth()+1}-${en.getDate()}`);
        setCnt(newCnt);
    }
    const prev = () => {
        let newCnt = cnt-1;
        d.setDate(d.getDate() + 7*newCnt);
        let st = new Date(d.getTime());
        let en = new Date(d.getTime());
        st.setDate(st.getDate()-st.getDay())
        en.setDate(en.getDate()+(6-en.getDay()))
        setStart(`${st.getFullYear()}-${st.getMonth()+1}-${st.getDate()}`);
        setEnd(`${en.getFullYear()}-${en.getMonth()+1}-${en.getDate()}`);
        setCnt(newCnt);
    }
    */