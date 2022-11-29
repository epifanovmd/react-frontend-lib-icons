import React, { FC, memo } from 'react';
import LockRemoveSvg from '../svg/lock-remove.svg';

export interface ILockRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockRemoveIcon: FC<ILockRemoveIconProps> = memo(props => {
  return <LockRemoveSvg {...props} />;
});
