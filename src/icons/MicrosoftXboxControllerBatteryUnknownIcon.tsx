import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryUnknownSvg from '../svg/microsoft-xbox-controller-battery-unknown.svg';

export interface IMicrosoftXboxControllerBatteryUnknownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryUnknownIcon: FC<IMicrosoftXboxControllerBatteryUnknownIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryUnknownSvg {...props} />;
});
