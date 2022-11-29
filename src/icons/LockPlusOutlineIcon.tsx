import React, { FC, memo } from 'react';
import LockPlusOutlineSvg from '../svg/lock-plus-outline.svg';

export interface ILockPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockPlusOutlineIcon: FC<ILockPlusOutlineIconProps> = memo(props => {
  return <LockPlusOutlineSvg {...props} />;
});
