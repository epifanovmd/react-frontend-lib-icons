import React, { FC, memo } from 'react';
import PowerSocketUsSvg from '../svg/power-socket-us.svg';

export interface IPowerSocketUsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketUsIcon: FC<IPowerSocketUsIconProps> = memo(props => {
  return <PowerSocketUsSvg {...props} />;
});
