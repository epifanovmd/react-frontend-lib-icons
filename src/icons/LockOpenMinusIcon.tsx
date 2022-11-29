import React, { FC, memo } from 'react';
import LockOpenMinusSvg from '../svg/lock-open-minus.svg';

export interface ILockOpenMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenMinusIcon: FC<ILockOpenMinusIconProps> = memo(props => {
  return <LockOpenMinusSvg {...props} />;
});
