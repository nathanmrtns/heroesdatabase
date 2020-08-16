import * as React from 'react';

import './CharacterListItem.css';
import ICharacter from '../../sources/ICharacter.interface';

interface IProps {
  character: ICharacter,
}

const CharacterListItem: React.FunctionComponent<IProps> = ({ character }: IProps) => {
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("clicked")
  }

  return (
    <div className="hero-card" onClick={onClickHandler}>
      <img src={character.image.url} alt={character.name}/>
      <span>{character.name}</span>
    </div>
  );
};

export default CharacterListItem;
