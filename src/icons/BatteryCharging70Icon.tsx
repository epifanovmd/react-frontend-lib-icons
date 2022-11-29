import React, { FC, memo } from 'react';
import BatteryCharging70Svg from '../svg/battery-charging-70.svg';

export interface IBatteryCharging70IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging70Icon: FC<IBatteryCharging70IconProps> = memo(props => {
  return <BatteryCharging70Svg {...props} />;
});
