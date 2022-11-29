import React, { FC, memo } from 'react';
import BatteryChargingWireless50Svg from '../svg/battery-charging-wireless-50.svg';

export interface IBatteryChargingWireless50IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingWireless50Icon: FC<IBatteryChargingWireless50IconProps> = memo(props => {
  return <BatteryChargingWireless50Svg {...props} />;
});
