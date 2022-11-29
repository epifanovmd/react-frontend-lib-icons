import React, { FC, memo } from 'react';
import BatteryChargingLowSvg from '../svg/battery-charging-low.svg';

export interface IBatteryChargingLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingLowIcon: FC<IBatteryChargingLowIconProps> = memo(props => {
  return <BatteryChargingLowSvg {...props} />;
});
