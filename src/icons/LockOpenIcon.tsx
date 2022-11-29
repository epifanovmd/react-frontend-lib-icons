import React, { FC, memo } from 'react';
import LockOpenSvg from '../svg/lock-open.svg';

export interface ILockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenIcon: FC<ILockOpenIconProps> = memo(props => {
  return <LockOpenSvg {...props} />;
});
