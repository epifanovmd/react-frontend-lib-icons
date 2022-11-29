import React, { FC, memo } from 'react';
import BatteryChargingWireless80Svg from '../svg/battery-charging-wireless-80.svg';

export interface IBatteryChargingWireless80IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless80Icon: FC<IBatteryChargingWireless80IconProps> = memo(props => {
  return <BatteryChargingWireless80Svg {...props} />;
});
