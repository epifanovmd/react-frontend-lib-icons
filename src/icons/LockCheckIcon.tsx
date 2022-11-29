import React, { FC, memo } from 'react';
import LockCheckSvg from '../svg/lock-check.svg';

export interface ILockCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockCheckIcon: FC<ILockCheckIconProps> = memo(props => {
  return <LockCheckSvg {...props} />;
});
