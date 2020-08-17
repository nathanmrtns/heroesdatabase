import React from 'react'
import { GiThink, GiBiceps, GiHoodedFigure, GiRevolt, GiSwordman } from "react-icons/gi";

import './PowerStatsItem.css'

interface PowerStatsProps {
  type: string,
  value: string
}

const PowerStatsItem = (props: PowerStatsProps) => {

  const getIconByType = (type: string) => {
    switch(type) {
      case "intelligence":
        return <GiThink className="power-card__icon"/>;
      case "strength":
        return <GiBiceps className="power-card__icon"/>;
      case "speed":
        return <GiHoodedFigure className="power-card__icon"/>;
      case "durability":
        return <GiRevolt className="power-card__icon"/>
      case "combat":
        return <GiSwordman className="power-card__icon"/>;
      default:
        return <GiHoodedFigure className="power-card__icon"/>;
    }
  }

  const {type, value} = props;

  return <div className="power-card">
    {getIconByType(type)}
    <span>{type}</span>
    <span>{value}/100</span>
  </div>
}

export default PowerStatsItem;