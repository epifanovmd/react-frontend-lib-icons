import React, { FC, memo } from 'react';
import BatteryClockSvg from '../svg/battery-clock.svg';

export interface IBatteryClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryClockIcon: FC<IBatteryClockIconProps> = memo(props => {
  return <BatteryClockSvg {...props} />;
});
