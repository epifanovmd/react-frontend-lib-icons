import React, { FC, memo } from 'react';
import LockCheckOutlineSvg from '../svg/lock-check-outline.svg';

export interface ILockCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockCheckOutlineIcon: FC<ILockCheckOutlineIconProps> = memo(props => {
  return <LockCheckOutlineSvg {...props} />;
});
