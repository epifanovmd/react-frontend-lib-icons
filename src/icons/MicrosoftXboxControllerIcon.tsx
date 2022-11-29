import React, { FC, memo } from 'react';
import MicrosoftXboxControllerSvg from '../svg/microsoft-xbox-controller.svg';

export interface IMicrosoftXboxControllerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerIcon: FC<IMicrosoftXboxControllerIconProps> = memo(props => {
  return <MicrosoftXboxControllerSvg {...props} />;
});
