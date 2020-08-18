import React from 'react'
import { GiThink, GiBiceps, GiHoodedFigure, GiRevolt, GiSwordman, GiPowerLightning } from "react-icons/gi";

import './styles.css'

interface PowerStatsProps {
  type: string,
  value: string
}

const PowerStatsItem = (props: PowerStatsProps) => {

  const getIconByType = (type: string) => {
    switch(type) {
      case "intelligence":
        return <GiThink className={`power-card__icon power-card--${type}`}/>;
      case "strength":
        return <GiBiceps className={`power-card__icon power-card--${type}`}/>;
      case "speed":
        return <GiHoodedFigure className={`power-card__icon power-card--${type}`}/>;
      case "durability":
        return <GiRevolt className={`power-card__icon power-card--${type}`}/>
      case "combat":
        return <GiSwordman className={`power-card__icon power-card--${type}`}/>;
      case "power":
        return <GiPowerLightning className={`power-card__icon power-card--${type}`}/>;
      default:
        return <GiHoodedFigure className={`power-card__icon power-card--${type}`}/>;
    }
  }

  const {type, value} = props;

  return <div className={`power-card power-card--${type}`}>
    {getIconByType(type)}
    <span>{type}</span>
    <span>{value}/100</span>
  </div>
}

export default PowerStatsItem;