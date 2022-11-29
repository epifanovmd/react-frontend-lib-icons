import React, { FC, memo } from 'react';
import LockOutlineSvg from '../svg/lock-outline.svg';

export interface ILockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOutlineIcon: FC<ILockOutlineIconProps> = memo(props => {
  return <LockOutlineSvg {...props} />;
});
