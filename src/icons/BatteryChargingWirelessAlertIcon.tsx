import React, { FC, memo } from 'react';
import BatteryChargingWirelessAlertSvg from '../svg/battery-charging-wireless-alert.svg';

export interface IBatteryChargingWirelessAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWirelessAlertIcon: FC<IBatteryChargingWirelessAlertIconProps> = memo(props => {
  return <BatteryChargingWirelessAlertSvg {...props} />;
});
