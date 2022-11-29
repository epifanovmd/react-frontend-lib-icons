import React, { FC, memo } from 'react';
import LockOffSvg from '../svg/lock-off.svg';

export interface ILockOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOffIcon: FC<ILockOffIconProps> = memo(props => {
  return <LockOffSvg {...props} />;
});
