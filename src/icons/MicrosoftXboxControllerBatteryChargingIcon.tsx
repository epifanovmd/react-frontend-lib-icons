import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryChargingSvg from '../svg/microsoft-xbox-controller-battery-charging.svg';

export interface IMicrosoftXboxControllerBatteryChargingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryChargingIcon: FC<IMicrosoftXboxControllerBatteryChargingIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryChargingSvg {...props} />;
});
