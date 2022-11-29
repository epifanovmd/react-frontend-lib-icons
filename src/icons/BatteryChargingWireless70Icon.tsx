import React, { FC, memo } from 'react';
import BatteryChargingWireless70Svg from '../svg/battery-charging-wireless-70.svg';

export interface IBatteryChargingWireless70IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless70Icon: FC<IBatteryChargingWireless70IconProps> = memo(props => {
  return <BatteryChargingWireless70Svg {...props} />;
});
