import React, { FC, memo } from 'react';
import BatterySvg from '../svg/battery.svg';

export interface IBatteryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryIcon: FC<IBatteryIconProps> = memo(props => {
  return <BatterySvg {...props} />;
});
