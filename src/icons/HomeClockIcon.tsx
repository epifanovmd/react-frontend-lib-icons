import React, { FC, memo } from 'react';
import HomeClockSvg from '../svg/home-clock.svg';

export interface IHomeClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeClockIcon: FC<IHomeClockIconProps> = memo(props => {
  return <HomeClockSvg {...props} />;
});
