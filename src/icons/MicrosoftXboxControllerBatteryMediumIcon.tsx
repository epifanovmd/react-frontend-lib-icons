import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryMediumSvg from '../svg/microsoft-xbox-controller-battery-medium.svg';

export interface IMicrosoftXboxControllerBatteryMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryMediumIcon: FC<IMicrosoftXboxControllerBatteryMediumIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryMediumSvg {...props} />;
});
