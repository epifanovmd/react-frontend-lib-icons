import React, { FC, memo } from 'react';
import MicrosoftSvg from '../svg/microsoft.svg';

export interface IMicrosoftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftIcon: FC<IMicrosoftIconProps> = memo(props => {
  return <MicrosoftSvg {...props} />;
});
