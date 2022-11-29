import React, { FC, memo } from 'react';
import BatteryNegativeSvg from '../svg/battery-negative.svg';

export interface IBatteryNegativeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryNegativeIcon: FC<IBatteryNegativeIconProps> = memo(props => {
  return <BatteryNegativeSvg {...props} />;
});
