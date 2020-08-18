import React, {FunctionComponent} from 'react';

// Business domain imports
import ICharacter from '../../sources/ICharacter.interface';
import CharacterListItem from '../CharaacterListItem';

import './styles.css'

interface IProps {
  characters: ICharacter[];
}

const CharacterList: FunctionComponent<IProps> = ({ characters }) => (
  <div className="hero-list">
    {characters && characters.map(character => (
      <CharacterListItem
        key={character.id}
        character={character} />
    ))}
  </div>
);

export default CharacterList;
