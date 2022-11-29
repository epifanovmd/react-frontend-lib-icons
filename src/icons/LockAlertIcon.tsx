import React, { FC, memo } from 'react';
import LockAlertSvg from '../svg/lock-alert.svg';

export interface ILockAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockAlertIcon: FC<ILockAlertIconProps> = memo(props => {
  return <LockAlertSvg {...props} />;
});
