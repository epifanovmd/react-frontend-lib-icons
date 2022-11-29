import React, { FC, memo } from 'react';
import BatteryChargingWireless10Svg from '../svg/battery-charging-wireless-10.svg';

export interface IBatteryChargingWireless10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless10Icon: FC<IBatteryChargingWireless10IconProps> = memo(props => {
  return <BatteryChargingWireless10Svg {...props} />;
});
