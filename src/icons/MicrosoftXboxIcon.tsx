import React, { FC, memo } from 'react';
import MicrosoftXboxSvg from '../svg/microsoft-xbox.svg';

export interface IMicrosoftXboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftXboxIcon: FC<IMicrosoftXboxIconProps> = memo(props => {
  return <MicrosoftXboxSvg {...props} />;
});
