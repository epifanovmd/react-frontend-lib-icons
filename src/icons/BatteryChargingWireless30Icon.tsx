import React, { FC, memo } from 'react';
import BatteryChargingWireless30Svg from '../svg/battery-charging-wireless-30.svg';

export interface IBatteryChargingWireless30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless30Icon: FC<IBatteryChargingWireless30IconProps> = memo(props => {
  return <BatteryChargingWireless30Svg {...props} />;
});
