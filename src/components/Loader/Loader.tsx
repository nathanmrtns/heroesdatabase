import * as React from 'react';
import icon from '../../assets/marvel.svg'

import './styles.css'

interface IProps { }

const Loader: React.FunctionComponent<IProps> = () => (
  <div className='loader'>
    <img className="loader__image" src={icon}/>
    <span className="loader__message">Cerebro is trying to find your hero...</span>
  </div>
);

export default Loader;
