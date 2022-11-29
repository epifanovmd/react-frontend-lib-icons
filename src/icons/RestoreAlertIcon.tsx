import React, { FC, memo } from 'react';
import RestoreAlertSvg from '../svg/restore-alert.svg';

export interface IRestoreAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RestoreAlertIcon: FC<IRestoreAlertIconProps> = memo(props => {
  return <RestoreAlertSvg {...props} />;
});
