import React, { FC, memo } from 'react';
import LockOpenAlertOutlineSvg from '../svg/lock-open-alert-outline.svg';

export interface ILockOpenAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenAlertOutlineIcon: FC<ILockOpenAlertOutlineIconProps> = memo(props => {
  return <LockOpenAlertOutlineSvg {...props} />;
});
