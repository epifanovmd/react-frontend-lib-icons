import React, { FC, memo } from 'react';
import AxisLockSvg from '../svg/axis-lock.svg';

export interface IAxisLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisLockIcon: FC<IAxisLockIconProps> = memo(props => {
  return <AxisLockSvg {...props} />;
});
