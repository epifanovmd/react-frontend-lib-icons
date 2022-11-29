import React, { FC, memo } from 'react';
import BatteryCharging80Svg from '../svg/battery-charging-80.svg';

export interface IBatteryCharging80IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging80Icon: FC<IBatteryCharging80IconProps> = memo(props => {
  return <BatteryCharging80Svg {...props} />;
});
