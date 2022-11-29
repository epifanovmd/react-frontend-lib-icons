import React, { FC, memo } from 'react';
import BatteryLockSvg from '../svg/battery-lock.svg';

export interface IBatteryLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryLockIcon: FC<IBatteryLockIconProps> = memo(props => {
  return <BatteryLockSvg {...props} />;
});
