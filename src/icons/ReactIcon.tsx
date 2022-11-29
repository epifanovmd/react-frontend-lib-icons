import React, { FC, memo } from 'react';
import ReactSvg from '../svg/react.svg';

export interface IReactIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReactIcon: FC<IReactIconProps> = memo(props => {
  return <ReactSvg {...props} />;
});
