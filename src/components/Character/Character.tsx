import * as React from 'react';

import ICharacter from '../../sources/ICharacter.interface';

interface IProps {
  character: ICharacter
}

const Character: React.FunctionComponent<IProps> = ({ character }: IProps) => (
  <>
    <h2>{character.name}</h2>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Info</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Height</th>
          <td>{character.name}</td>
        </tr>
        <tr>
          <th scope="row">Mass</th>
          <td>{character.name}</td>
        </tr>
      </tbody>
    </table>
  </>
)

export default Character;
