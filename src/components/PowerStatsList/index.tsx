import React, {FunctionComponent} from 'react';
import ICharacter from '../../sources/ICharacter.interface';
import PowerStatsItem from '../PowerStatsItem';

interface IProps {
  character: ICharacter
}

export const PowerStatsList: FunctionComponent<IProps> = ({character}) => {
  const renderPowerStats = (key: string) => {
    const type = key;
    const value = character.powerstats[key]
    return <PowerStatsItem key={type} type={type} value={value} />
  }

  return <>{Object.keys(character.powerstats).map(renderPowerStats)}</>
}

export default PowerStatsList;