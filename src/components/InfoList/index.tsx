import React, { FunctionComponent } from 'react';
import TitleAndSubtitle from '../TitleAndSubtitle';

interface IProps {
  objProps: Record<string, any>;
}

export const InfoList: FunctionComponent<IProps> = ({ objProps }) => {
  return <>
    {
      Object.keys(objProps).map(key => {
        const title = key;
        const value = objProps[key]
        return <TitleAndSubtitle key={title} title={title} subtitle={value} />
      })
    }
  </>
}

export default InfoList;