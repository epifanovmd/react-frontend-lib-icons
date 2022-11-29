import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryFullSvg from '../svg/microsoft-xbox-controller-battery-full.svg';

export interface IMicrosoftXboxControllerBatteryFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryFullIcon: FC<IMicrosoftXboxControllerBatteryFullIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryFullSvg {...props} />;
});
