import React, { FC, memo } from 'react';
import LockOpenCheckOutlineSvg from '../svg/lock-open-check-outline.svg';

export interface ILockOpenCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenCheckOutlineIcon: FC<ILockOpenCheckOutlineIconProps> = memo(props => {
  return <LockOpenCheckOutlineSvg {...props} />;
});
