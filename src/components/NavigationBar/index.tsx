import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

export const NavigationBar = () => {
  return <>
    <nav className="nav-bar">
      <Link to="/">HEROES DATABASE</Link>
    </nav>
  </>
}

export default NavigationBar;
