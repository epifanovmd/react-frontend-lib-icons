import React, { FC, memo } from 'react';
import MicrosoftXboxControllerMenuSvg from '../svg/microsoft-xbox-controller-menu.svg';

export interface IMicrosoftXboxControllerMenuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerMenuIcon: FC<IMicrosoftXboxControllerMenuIconProps> = memo(props => {
  return <MicrosoftXboxControllerMenuSvg {...props} />;
});
