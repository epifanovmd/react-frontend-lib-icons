import React, { FC, memo } from 'react';
import LockMinusOutlineSvg from '../svg/lock-minus-outline.svg';

export interface ILockMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockMinusOutlineIcon: FC<ILockMinusOutlineIconProps> = memo(props => {
  return <LockMinusOutlineSvg {...props} />;
});
