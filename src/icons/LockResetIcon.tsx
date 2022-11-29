import React, { FC, memo } from 'react';
import LockResetSvg from '../svg/lock-reset.svg';

export interface ILockResetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockResetIcon: FC<ILockResetIconProps> = memo(props => {
  return <LockResetSvg {...props} />;
});
