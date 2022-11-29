import React, { FC, memo } from 'react';
import BatteryCharging50Svg from '../svg/battery-charging-50.svg';

export interface IBatteryCharging50IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCharging50Icon: FC<IBatteryCharging50IconProps> = memo(props => {
  return <BatteryCharging50Svg {...props} />;
});
