import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
   render(){
       return (
           <div>
            <h1>{ this.props.title }</h1>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
           </div>
       );
   }
}

export default Header;