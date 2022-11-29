import React, { FC, memo } from 'react';
import BatteryClockOutlineSvg from '../svg/battery-clock-outline.svg';

export interface IBatteryClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryClockOutlineIcon: FC<IBatteryClockOutlineIconProps> = memo(props => {
  return <BatteryClockOutlineSvg {...props} />;
});
