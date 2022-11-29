import React, { FC, memo } from 'react';
import BatteryHighSvg from '../svg/battery-high.svg';

export interface IBatteryHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryHighIcon: FC<IBatteryHighIconProps> = memo(props => {
  return <BatteryHighSvg {...props} />;
});
