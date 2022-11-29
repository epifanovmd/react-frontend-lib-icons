import React, { FC, memo } from 'react';
import LockRemoveOutlineSvg from '../svg/lock-remove-outline.svg';

export interface ILockRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockRemoveOutlineIcon: FC<ILockRemoveOutlineIconProps> = memo(props => {
  return <LockRemoveOutlineSvg {...props} />;
});
