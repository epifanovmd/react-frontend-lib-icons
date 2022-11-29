import React, { FC, memo } from 'react';
import LockClockSvg from '../svg/lock-clock.svg';

export interface ILockClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockClockIcon: FC<ILockClockIconProps> = memo(props => {
  return <LockClockSvg {...props} />;
});
