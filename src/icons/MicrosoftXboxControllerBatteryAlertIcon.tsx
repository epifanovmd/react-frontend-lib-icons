import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryAlertSvg from '../svg/microsoft-xbox-controller-battery-alert.svg';

export interface IMicrosoftXboxControllerBatteryAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryAlertIcon: FC<IMicrosoftXboxControllerBatteryAlertIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryAlertSvg {...props} />;
});
