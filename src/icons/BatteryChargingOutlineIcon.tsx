import React, { FC, memo } from 'react';
import BatteryChargingOutlineSvg from '../svg/battery-charging-outline.svg';

export interface IBatteryChargingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryChargingOutlineIcon: FC<IBatteryChargingOutlineIconProps> = memo(props => {
  return <BatteryChargingOutlineSvg {...props} />;
});
