import React, { FC, memo } from 'react';
import LockOpenPlusSvg from '../svg/lock-open-plus.svg';

export interface ILockOpenPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenPlusIcon: FC<ILockOpenPlusIconProps> = memo(props => {
  return <LockOpenPlusSvg {...props} />;
});
