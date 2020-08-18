import * as React from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';
import ICharacter from '../../sources/ICharacter.interface';

interface IProps{
  key?: string,
  character: ICharacter,
}

const CharacterListItem: React.FunctionComponent<IProps> = ({ character }: IProps) => {
  let history = useHistory();

  const onClickHandler = (id: string) => (event: React.MouseEvent)  => {
    event.preventDefault();
    history.push(`/character/${id}`);
  }

  return (
    <div className="hero-card" onClick={onClickHandler(character.id)}>
      <img src={character.image.url} alt={character.name}/>
      <span>{character.name}</span>
    </div>
  );
};

export default CharacterListItem;
