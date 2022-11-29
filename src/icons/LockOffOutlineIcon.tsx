import React, { FC, memo } from 'react';
import LockOffOutlineSvg from '../svg/lock-off-outline.svg';

export interface ILockOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOffOutlineIcon: FC<ILockOffOutlineIconProps> = memo(props => {
  return <LockOffOutlineSvg {...props} />;
});
