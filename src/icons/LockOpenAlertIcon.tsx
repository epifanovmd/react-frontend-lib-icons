import React, { FC, memo } from 'react';
import LockOpenAlertSvg from '../svg/lock-open-alert.svg';

export interface ILockOpenAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenAlertIcon: FC<ILockOpenAlertIconProps> = memo(props => {
  return <LockOpenAlertSvg {...props} />;
});
