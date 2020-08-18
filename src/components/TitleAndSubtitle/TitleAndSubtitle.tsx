import React, {FunctionComponent} from 'react';

import './style.css';

interface IProps {
  title: string,
  subtitle: any,
}

const TitleAndSubtitle: FunctionComponent<IProps> = ({title, subtitle}) => {
  const isSubObject = typeof subtitle == "object";

  return <div className="labels-container" >
    <span className="title">{title}</span>
    <span className="subtitle">{isSubObject ? subtitle.join(", ") : subtitle}</span>
  </div>
}

export default TitleAndSubtitle;