import React, { FC, memo } from 'react';
import BatteryCheckOutlineSvg from '../svg/battery-check-outline.svg';

export interface IBatteryCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCheckOutlineIcon: FC<IBatteryCheckOutlineIconProps> = memo(props => {
  return <BatteryCheckOutlineSvg {...props} />;
});
