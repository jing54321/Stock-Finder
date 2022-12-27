import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';
import StockContext from '../../Context/Stock/StockContext';
import Spinner from '../Layout/Spinner';


const News = () => {

    const {ticker} = useParams();
    const stockContext = useContext(StockContext);
    const {getCompanyNews, loading, companyNews} = stockContext;

    useEffect(() => {
        getCompanyNews(ticker);
        // eslint-disable-next-line
      },[]);
    
    if(loading) return <Spinner/>
  return (
    <ul className='news'>
      {companyNews.map((news) => <NewsItem news={news} key={news.id}/>)}
    </ul>
  )
}

export default News
