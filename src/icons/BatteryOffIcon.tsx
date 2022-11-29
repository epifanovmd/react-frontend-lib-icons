import React, { FC, memo } from 'react';
import BatteryOffSvg from '../svg/battery-off.svg';

export interface IBatteryOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryOffIcon: FC<IBatteryOffIconProps> = memo(props => {
  return <BatteryOffSvg {...props} />;
});
