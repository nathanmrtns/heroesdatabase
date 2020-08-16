import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../../store/IAppState.interface';
import ICharacter from '../../sources/ICharacter.interface';

import {
  searchCharactersActionCreator
} from '../../actions/CharacterActionCreators';

import CharacterList from '../CharacterList/CharacterList';
import Loader from '../Loader/Loader';
import NavigationBar from '../NavigationBar/NavigationBar';

import './CharacterContainer.css';

interface IProps {
  searchCharacters: Function,
  character: any,
  characters: ICharacter[],
  isFetching: Boolean
}

export const CharacterContainer: React.FunctionComponent<IProps> = ({
  searchCharacters,
  characters,
  isFetching
}) => {
  React.useEffect(() => {
    searchCharacters("super");
  }, [searchCharacters]);

  return (
    <div className="characters-container">
      <NavigationBar>
        {/* Some logo maybe */}
      </NavigationBar>

      { isFetching
        ? <Loader></Loader>
        : (
            <div className="list">
              <CharacterList
                characters={characters} />
            </div>
        )
      }
    </div>
  );
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    character: store.characterState.character,
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
export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
