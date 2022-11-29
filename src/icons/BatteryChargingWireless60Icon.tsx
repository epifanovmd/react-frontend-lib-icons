import React, { FC, memo } from 'react';
import BatteryChargingWireless60Svg from '../svg/battery-charging-wireless-60.svg';

export interface IBatteryChargingWireless60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless60Icon: FC<IBatteryChargingWireless60IconProps> = memo(props => {
  return <BatteryChargingWireless60Svg {...props} />;
});
