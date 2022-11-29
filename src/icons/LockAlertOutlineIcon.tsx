import React, { FC, memo } from 'react';
import LockAlertOutlineSvg from '../svg/lock-alert-outline.svg';

export interface ILockAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockAlertOutlineIcon: FC<ILockAlertOutlineIconProps> = memo(props => {
  return <LockAlertOutlineSvg {...props} />;
});
