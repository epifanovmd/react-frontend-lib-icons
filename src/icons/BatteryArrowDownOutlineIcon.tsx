import React, { FC, memo } from 'react';
import BatteryArrowDownOutlineSvg from '../svg/battery-arrow-down-outline.svg';

export interface IBatteryArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryArrowDownOutlineIcon: FC<IBatteryArrowDownOutlineIconProps> = memo(props => {
  return <BatteryArrowDownOutlineSvg {...props} />;
});
