import React, { FC, memo } from 'react';
import BatteryChargingWireless40Svg from '../svg/battery-charging-wireless-40.svg';

export interface IBatteryChargingWireless40IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless40Icon: FC<IBatteryChargingWireless40IconProps> = memo(props => {
  return <BatteryChargingWireless40Svg {...props} />;
});
