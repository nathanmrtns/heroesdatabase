import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import IAppState from '../../store/IAppState.interface';
import ICharacter from '../../sources/ICharacter.interface';

import {
  searchCharactersActionCreator
} from '../../actions/CharacterActionCreators';

import CharacterList from '../../components/CharacterList';
import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';

import './styles.css';

interface IProps {
  searchCharacters: Function,
  characters: ICharacter[],
  isFetching: Boolean,
}

export const CharactersSearch: React.FunctionComponent<IProps> = ({
  searchCharacters,
  characters,
  isFetching
}) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    searchCharacters("super");
  }, [searchCharacters]);


  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchCharacters(search);
  }

  return (
    <div className="characters-container">
      <NavigationBar />
      <div className='search'>
        <form onSubmit={submitSearch}>
          <input className="search-field" placeholder='Search a hero' value={search} onChange={e => setSearch(e.target.value)}></input>
          <button>SEARCH</button>
        </form>
      </div>
      {isFetching
        ? <>
          <Loader></Loader>
        </>
        : (
          <>
            <div className="list">
              <CharacterList
                characters={characters} />
            </div>
          </>
        )
      }
    </div>
  );
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    searchCharacters: (term: string) => dispatch(searchCharactersActionCreator(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharactersSearch);
