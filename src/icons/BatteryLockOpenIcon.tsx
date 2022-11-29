import React, { FC, memo } from 'react';
import BatteryLockOpenSvg from '../svg/battery-lock-open.svg';

export interface IBatteryLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryLockOpenIcon: FC<IBatteryLockOpenIconProps> = memo(props => {
  return <BatteryLockOpenSvg {...props} />;
});
