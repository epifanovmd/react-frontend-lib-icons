import React, { FC, memo } from 'react';
import BatteryCheckSvg from '../svg/battery-check.svg';

export interface IBatteryCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryCheckIcon: FC<IBatteryCheckIconProps> = memo(props => {
  return <BatteryCheckSvg {...props} />;
});
