import React, { FC, memo } from 'react';
import LockOpenRemoveOutlineSvg from '../svg/lock-open-remove-outline.svg';

export interface ILockOpenRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenRemoveOutlineIcon: FC<ILockOpenRemoveOutlineIconProps> = memo(props => {
  return <LockOpenRemoveOutlineSvg {...props} />;
});
