import React, { FC, memo } from 'react';
import LockPercentSvg from '../svg/lock-percent.svg';

export interface ILockPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPercentIcon: FC<ILockPercentIconProps> = memo(props => {
  return <LockPercentSvg {...props} />;
});
