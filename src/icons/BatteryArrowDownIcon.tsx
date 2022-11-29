import React, { FC, memo } from 'react';
import BatteryArrowDownSvg from '../svg/battery-arrow-down.svg';

export interface IBatteryArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryArrowDownIcon: FC<IBatteryArrowDownIconProps> = memo(props => {
  return <BatteryArrowDownSvg {...props} />;
});
