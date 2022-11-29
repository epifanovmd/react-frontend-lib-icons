import React, { FC, memo } from 'react';
import BatteryUnknownSvg from '../svg/battery-unknown.svg';

export interface IBatteryUnknownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryUnknownIcon: FC<IBatteryUnknownIconProps> = memo(props => {
  return <BatteryUnknownSvg {...props} />;
});
