import React, { FC, memo } from 'react';
import BatteryChargingWirelessOutlineSvg from '../svg/battery-charging-wireless-outline.svg';

export interface IBatteryChargingWirelessOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWirelessOutlineIcon: FC<IBatteryChargingWirelessOutlineIconProps> = memo(props => {
  return <BatteryChargingWirelessOutlineSvg {...props} />;
});
