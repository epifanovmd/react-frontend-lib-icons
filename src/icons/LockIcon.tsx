import React, { FC, memo } from 'react';
import LockSvg from '../svg/lock.svg';

export interface ILockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockIcon: FC<ILockIconProps> = memo(props => {
  return <LockSvg {...props} />;
});
