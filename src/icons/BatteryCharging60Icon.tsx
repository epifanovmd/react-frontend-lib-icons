import React, { FC, memo } from 'react';
import BatteryCharging60Svg from '../svg/battery-charging-60.svg';

export interface IBatteryCharging60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging60Icon: FC<IBatteryCharging60IconProps> = memo(props => {
  return <BatteryCharging60Svg {...props} />;
});
