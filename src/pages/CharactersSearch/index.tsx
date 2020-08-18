import React, { FunctionComponent, FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import IAppState from '../../store/IAppState.interface';
import ICharacter from '../../sources/ICharacter.interface';

import {
  searchCharactersActionCreator
} from '../../actions/CharacterActionCreators';

import CharacterList from '../../components/CharacterList';
import Loader from '../../components/Loader';
import NavigationBar from '../../components/NavigationBar';
import Search from '../../components/Search';

import './styles.css';

interface IProps {
  searchCharacters: Function,
  characters: ICharacter[],
  isFetching: Boolean,
}

export const CharactersSearch: FunctionComponent<IProps> = ({
  searchCharacters,
  characters,
  isFetching
}) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    const DEFAULT_SEARCH = "man";
    searchCharacters(DEFAULT_SEARCH);
  }, [searchCharacters]);


  const submitSearch = (e: FormEvent) => {
    e.preventDefault()
    searchCharacters(search);
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  }


  return (
    <div className="characters-container">
      <NavigationBar />
      <Search value={search} onSubmit={submitSearch} onChange={onChange}/>
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
