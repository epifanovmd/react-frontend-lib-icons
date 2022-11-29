import React, { FC, memo } from 'react';
import BatteryCharging20Svg from '../svg/battery-charging-20.svg';

export interface IBatteryCharging20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging20Icon: FC<IBatteryCharging20IconProps> = memo(props => {
  return <BatteryCharging20Svg {...props} />;
});
