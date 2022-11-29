import React, { FC, memo } from 'react';
import BatteryChargingWireless20Svg from '../svg/battery-charging-wireless-20.svg';

export interface IBatteryChargingWireless20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless20Icon: FC<IBatteryChargingWireless20IconProps> = memo(props => {
  return <BatteryChargingWireless20Svg {...props} />;
});
