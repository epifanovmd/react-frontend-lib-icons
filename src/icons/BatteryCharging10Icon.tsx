import React, { FC, memo } from 'react';
import BatteryCharging10Svg from '../svg/battery-charging-10.svg';

export interface IBatteryCharging10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging10Icon: FC<IBatteryCharging10IconProps> = memo(props => {
  return <BatteryCharging10Svg {...props} />;
});
