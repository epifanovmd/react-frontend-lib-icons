import React, { FC, memo } from 'react';
import RestartAlertSvg from '../svg/restart-alert.svg';

export interface IRestartAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RestartAlertIcon: FC<IRestartAlertIconProps> = memo(props => {
  return <RestartAlertSvg {...props} />;
});
