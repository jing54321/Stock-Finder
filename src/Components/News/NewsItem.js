import React from 'react'

const NewsItem = ({news}) => {

  const {headline,datetime,image,url,source,summary} = news

  const unixTime = new Date(datetime*1000)
  return (
    <li style={newsStyle} className="card">
        <div className="text-center">
          <a target="_blank" rel="noopener noreferrer" href={url}><img src={image} alt='' style={{width:'70%'}}/></a>
        </div>
        <div>
            <h4><a href={url} target="_blank" rel="noopener noreferrer" style={{color:'#333333'}}>{headline}</a></h4>
            <small>Date: {`${unixTime.getFullYear()}-${unixTime.getMonth()+1}-${unixTime.getDate()}`}</small>
            <p>{summary}</p>
            <small>source: {source}</small>
        </div>
    </li>
  )
}
const newsStyle = {
    display : 'grid',
    gridTemplateColumns:'1fr 3fr',
    boxShadow : '0 0 1px inset'
    
}
export default NewsItem
