import React, { FC, memo } from 'react';
import BatteryChargingHighSvg from '../svg/battery-charging-high.svg';

export interface IBatteryChargingHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingHighIcon: FC<IBatteryChargingHighIconProps> = memo(props => {
  return <BatteryChargingHighSvg {...props} />;
});
