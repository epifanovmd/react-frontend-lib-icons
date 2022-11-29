import React, { FC, memo } from 'react';
import BatteryMinusSvg from '../svg/battery-minus.svg';

export interface IBatteryMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryMinusIcon: FC<IBatteryMinusIconProps> = memo(props => {
  return <BatteryMinusSvg {...props} />;
});
