import React, { ReactNode } from 'react';

import './NavigationBar.css'

interface IProps {
  children: ReactNode,
}

const NavigationBar: React.FunctionComponent<IProps> = ({ children }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span>My Hero Academia</span>
    </nav>
    
    <div className='search'>
      <input className="search-field" placeholder='Search a hero'></input>
    </div>
  </>
);

export default NavigationBar;