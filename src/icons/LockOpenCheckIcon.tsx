import React, { FC, memo } from 'react';
import LockOpenCheckSvg from '../svg/lock-open-check.svg';

export interface ILockOpenCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenCheckIcon: FC<ILockOpenCheckIconProps> = memo(props => {
  return <LockOpenCheckSvg {...props} />;
});
