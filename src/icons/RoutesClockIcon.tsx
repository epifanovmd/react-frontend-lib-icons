import React, { FC, memo } from 'react';
import RoutesClockSvg from '../svg/routes-clock.svg';

export interface IRoutesClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoutesClockIcon: FC<IRoutesClockIconProps> = memo(props => {
  return <RoutesClockSvg {...props} />;
});
