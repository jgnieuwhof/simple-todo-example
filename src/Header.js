import React from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg';

let Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>

    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
      </ul>
    </div>
  </header>
)

export default Header;
