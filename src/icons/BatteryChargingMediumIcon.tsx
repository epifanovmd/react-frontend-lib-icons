import React, { FC, memo } from 'react';
import BatteryChargingMediumSvg from '../svg/battery-charging-medium.svg';

export interface IBatteryChargingMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingMediumIcon: FC<IBatteryChargingMediumIconProps> = memo(props => {
  return <BatteryChargingMediumSvg {...props} />;
});
