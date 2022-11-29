import React, { FC, memo } from 'react';
import BatteryChargingWireless90Svg from '../svg/battery-charging-wireless-90.svg';

export interface IBatteryChargingWireless90IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless90Icon: FC<IBatteryChargingWireless90IconProps> = memo(props => {
  return <BatteryChargingWireless90Svg {...props} />;
});
