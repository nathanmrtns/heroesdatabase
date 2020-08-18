import React, {FunctionComponent} from 'react';
import icon from '../../assets/marvel.svg'

import './styles.css'

interface IProps { }

export const Loader: FunctionComponent<IProps> = () => (
  <div className='loader'>
    <img className="loader__image" src={icon} alt="loader"/>
    <span className="loader__message">Cerebro is trying to find your hero...</span>
  </div>
);

export default Loader;
