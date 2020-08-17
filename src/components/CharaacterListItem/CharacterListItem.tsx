import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import './CharacterListItem.css';
import ICharacter from '../../sources/ICharacter.interface';

interface IProps extends RouteComponentProps<any>{
  character: ICharacter,
}

const CharacterListItem: React.FunctionComponent<IProps> = ({ character, history }: IProps) => {
  const onClickHandler = (id: string) => (event: React.MouseEvent)  => {
    event.preventDefault();
    history.push(`/characted/${id}`);
  }

  return (
    <div className="hero-card" onClick={onClickHandler(character.id)}>
      <img src={character.image.url} alt={character.name}/>
      <span>{character.name}</span>
    </div>
  );
};

export default withRouter(CharacterListItem);
