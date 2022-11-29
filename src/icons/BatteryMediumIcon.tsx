import React, { FC, memo } from 'react';
import BatteryMediumSvg from '../svg/battery-medium.svg';

export interface IBatteryMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryMediumIcon: FC<IBatteryMediumIconProps> = memo(props => {
  return <BatteryMediumSvg {...props} />;
});
