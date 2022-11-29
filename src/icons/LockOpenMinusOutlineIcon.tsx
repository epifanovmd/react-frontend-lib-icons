import React, { FC, memo } from 'react';
import LockOpenMinusOutlineSvg from '../svg/lock-open-minus-outline.svg';

export interface ILockOpenMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenMinusOutlineIcon: FC<ILockOpenMinusOutlineIconProps> = memo(props => {
  return <LockOpenMinusOutlineSvg {...props} />;
});
