import React, {FunctionComponent} from 'react';
import './styles.css';

interface IProps {
  value: string,
  onChange: Function,
  onSubmit: Function,
}

export const Search: FunctionComponent<IProps> = ({value, onChange, onSubmit}) => {
  return <div className='search'>
    <form onSubmit={e => onSubmit(e)}>
      <input className="search-field" placeholder='Search a hero' value={value} onChange={e => onChange(e)}></input>
      <button onClick={e => onSubmit(e)}>SEARCH</button>
    </form>
  </div>;
}

export default Search;