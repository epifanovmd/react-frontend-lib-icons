import React, { FC, memo } from 'react';
import BatteryArrowUpOutlineSvg from '../svg/battery-arrow-up-outline.svg';

export interface IBatteryArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryArrowUpOutlineIcon: FC<IBatteryArrowUpOutlineIconProps> = memo(props => {
  return <BatteryArrowUpOutlineSvg {...props} />;
});
