import React, { FC, memo } from 'react';
import MicrosoftXboxControllerBatteryEmptySvg from '../svg/microsoft-xbox-controller-battery-empty.svg';

export interface IMicrosoftXboxControllerBatteryEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerBatteryEmptyIcon: FC<IMicrosoftXboxControllerBatteryEmptyIconProps> = memo(props => {
  return <MicrosoftXboxControllerBatteryEmptySvg {...props} />;
});
