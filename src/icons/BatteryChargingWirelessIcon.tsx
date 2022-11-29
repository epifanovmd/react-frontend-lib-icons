import React, { FC, memo } from 'react';
import BatteryChargingWirelessSvg from '../svg/battery-charging-wireless.svg';

export interface IBatteryChargingWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWirelessIcon: FC<IBatteryChargingWirelessIconProps> = memo(props => {
  return <BatteryChargingWirelessSvg {...props} />;
});
