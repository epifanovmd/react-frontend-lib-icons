import React, { FC, memo } from 'react';
import LockOpenRemoveSvg from '../svg/lock-open-remove.svg';

export interface ILockOpenRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenRemoveIcon: FC<ILockOpenRemoveIconProps> = memo(props => {
  return <LockOpenRemoveSvg {...props} />;
});
