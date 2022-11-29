import React, { FC, memo } from 'react';
import TrayAlertSvg from '../svg/tray-alert.svg';

export interface ITrayAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayAlertIcon: FC<ITrayAlertIconProps> = memo(props => {
  return <TrayAlertSvg {...props} />;
});
