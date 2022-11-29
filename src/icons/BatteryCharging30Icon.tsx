import React, { FC, memo } from 'react';
import BatteryCharging30Svg from '../svg/battery-charging-30.svg';

export interface IBatteryCharging30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging30Icon: FC<IBatteryCharging30IconProps> = memo(props => {
  return <BatteryCharging30Svg {...props} />;
});
