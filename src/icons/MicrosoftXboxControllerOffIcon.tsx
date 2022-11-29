import React, { FC, memo } from 'react';
import MicrosoftXboxControllerOffSvg from '../svg/microsoft-xbox-controller-off.svg';

export interface IMicrosoftXboxControllerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerOffIcon: FC<IMicrosoftXboxControllerOffIconProps> = memo(props => {
  return <MicrosoftXboxControllerOffSvg {...props} />;
});
