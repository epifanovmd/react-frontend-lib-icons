import React, { FC, memo } from 'react';
import LockPatternSvg from '../svg/lock-pattern.svg';

export interface ILockPatternIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPatternIcon: FC<ILockPatternIconProps> = memo(props => {
  return <LockPatternSvg {...props} />;
});
