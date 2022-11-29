import React, { FC, memo } from 'react';
import BatteryChargingSvg from '../svg/battery-charging.svg';

export interface IBatteryChargingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingIcon: FC<IBatteryChargingIconProps> = memo(props => {
  return <BatteryChargingSvg {...props} />;
});
