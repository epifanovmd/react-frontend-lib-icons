import React, { FC, memo } from 'react';
import BatteryCharging90Svg from '../svg/battery-charging-90.svg';

export interface IBatteryCharging90IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging90Icon: FC<IBatteryCharging90IconProps> = memo(props => {
  return <BatteryCharging90Svg {...props} />;
});
