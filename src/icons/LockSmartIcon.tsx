import React, { FC, memo } from 'react';
import LockSmartSvg from '../svg/lock-smart.svg';

export interface ILockSmartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockSmartIcon: FC<ILockSmartIconProps> = memo(props => {
  return <LockSmartSvg {...props} />;
});
