import React, {FunctionComponent} from 'react'
import { GiThink, GiBiceps, GiHoodedFigure, GiRevolt, GiSwordman, GiPowerLightning } from "react-icons/gi";

import './styles.css'
import { IconType } from 'react-icons/lib';

interface PowerStatsProps {
  type: string,
  value: string
}

const PowerStatsItem: FunctionComponent<PowerStatsProps> = ({type, value}) => {

  const getIconByType = (type: string) => {
    let Icon = GiThink;
    let className = `power-card__icon power-card--${type}`;
    let icons: Record<string, IconType> = {
      "intelligence": GiThink,
      "strength":GiBiceps,
      "speed":GiHoodedFigure,
      "durability":GiRevolt,
      "combat": GiSwordman,
      "power":GiPowerLightning,
    }

    Icon = icons[type];
    return <Icon className={className}/>
  }

  return <div className={`power-card power-card--${type}`}>
    {getIconByType(type)}
    <span>{type}</span>
    <span>{value}/100</span>
  </div>
}

export default PowerStatsItem;