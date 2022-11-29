import React, { FC, memo } from 'react';
import LockMinusSvg from '../svg/lock-minus.svg';

export interface ILockMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockMinusIcon: FC<ILockMinusIconProps> = memo(props => {
  return <LockMinusSvg {...props} />;
});
