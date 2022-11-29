import React, { FC, memo } from 'react';
import HockeyPuckSvg from '../svg/hockey-puck.svg';

export interface IHockeyPuckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HockeyPuckIcon: FC<IHockeyPuckIconProps> = memo(props => {
  return <HockeyPuckSvg {...props} />;
});
