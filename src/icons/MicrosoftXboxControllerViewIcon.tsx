import React, { FC, memo } from 'react';
import MicrosoftXboxControllerViewSvg from '../svg/microsoft-xbox-controller-view.svg';

export interface IMicrosoftXboxControllerViewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxControllerViewIcon: FC<IMicrosoftXboxControllerViewIconProps> = memo(props => {
  return <MicrosoftXboxControllerViewSvg {...props} />;
});
