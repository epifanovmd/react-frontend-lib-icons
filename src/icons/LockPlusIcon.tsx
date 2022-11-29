import React, { FC, memo } from 'react';
import LockPlusSvg from '../svg/lock-plus.svg';

export interface ILockPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPlusIcon: FC<ILockPlusIconProps> = memo(props => {
  return <LockPlusSvg {...props} />;
});
