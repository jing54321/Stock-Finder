import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({title}) => {
  return (
    <div className="navbar" style={{backgroundColor:'#549451'}}>
      <h2 style={{color:'#fff'}}>
        <i className="fa-solid fa-arrow-trend-up"></i> {title}
      </h2>
      <h3>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
      </h3>
    </div>
  )
}
NavBar.defaultProps = {
    title:'Stock Finder'
}

export default NavBar
