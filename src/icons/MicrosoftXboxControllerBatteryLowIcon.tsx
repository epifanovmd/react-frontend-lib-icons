import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryLowSvg from '../svg/microsoft-xbox-controller-battery-low.svg';

export interface IMicrosoftXboxControllerBatteryLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryLowIcon: FC<IMicrosoftXboxControllerBatteryLowIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryLowSvg {...props} />;
});
