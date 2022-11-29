import React, { FC, memo } from 'react';
import BusClockSvg from '../svg/bus-clock.svg';

export interface IBusClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusClockIcon: FC<IBusClockIconProps> = memo(props => {
  return <BusClockSvg {...props} />;
});
