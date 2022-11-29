import React, { FC, memo } from 'react';
import BatteryCharging100Svg from '../svg/battery-charging-100.svg';

export interface IBatteryCharging100IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging100Icon: FC<IBatteryCharging100IconProps> = memo(props => {
  return <BatteryCharging100Svg {...props} />;
});
