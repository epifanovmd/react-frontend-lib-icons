import React, { FC, memo } from 'react';
import BatteryPositiveSvg from '../svg/battery-positive.svg';

export interface IBatteryPositiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryPositiveIcon: FC<IBatteryPositiveIconProps> = memo(props => {
  return <BatteryPositiveSvg {...props} />;
});
