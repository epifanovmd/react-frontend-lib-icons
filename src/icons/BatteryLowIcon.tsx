import React, { FC, memo } from 'react';
import BatteryLowSvg from '../svg/battery-low.svg';

export interface IBatteryLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryLowIcon: FC<IBatteryLowIconProps> = memo(props => {
  return <BatteryLowSvg {...props} />;
});
