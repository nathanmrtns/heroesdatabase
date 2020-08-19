import React, { FunctionComponent } from 'react';

// Business domain imports
import ICharacter from '../../sources/ICharacter.interface';
import CharacterListItem from '../CharacterListItem';

import './styles.css'

interface IProps {
  characters: ICharacter[];
}

const CharacterList: FunctionComponent<IProps> = ({ characters }) => {
  return (characters && characters.length > 0) ? (
    <div className="hero-list">
      {
        characters && characters.map(character => (
          <CharacterListItem
            key={character.id}
            character={character} />
        ))
      }
    </div>
  ) : <h2 className="hero-list__empty-msg">
    Cerebro could not find your hero. Maybe he is using Magneto's helmet.
    </h2>
}

export default CharacterList;
