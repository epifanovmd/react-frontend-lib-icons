import React, { FC, memo } from 'react';
import BatteryArrowUpSvg from '../svg/battery-arrow-up.svg';

export interface IBatteryArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryArrowUpIcon: FC<IBatteryArrowUpIconProps> = memo(props => {
  return <BatteryArrowUpSvg {...props} />;
});
