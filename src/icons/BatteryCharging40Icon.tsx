import React, { FC, memo } from 'react';
import BatteryCharging40Svg from '../svg/battery-charging-40.svg';

export interface IBatteryCharging40IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging40Icon: FC<IBatteryCharging40IconProps> = memo(props => {
  return <BatteryCharging40Svg {...props} />;
});
