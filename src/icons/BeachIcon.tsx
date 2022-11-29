import React, { FC, memo } from 'react';
import BeachSvg from '../svg/beach.svg';

export interface IBeachIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeachIcon: FC<IBeachIconProps> = memo(props => {
  return <BeachSvg {...props} />;
});
