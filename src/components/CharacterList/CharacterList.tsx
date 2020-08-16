import * as React from 'react';

// Business domain imports
import ICharacter from '../../sources/ICharacter.interface';
import CharacterListItem from '../CharaacterListItem/CharacterListItem';

import './CharacterList.css'

interface IProps {
  characters: ICharacter[];
}

const CharacterList: React.FunctionComponent<IProps> = ({ characters }) => (
  <div className="hero-list">
    {characters && characters.map(character => (
      <CharacterListItem
        key={character.id}
        character={character} />
    ))}
  </div>
);

export default CharacterList;
