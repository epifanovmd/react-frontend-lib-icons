import React, { FC, memo } from 'react';
import MicrosoftAccessSvg from '../svg/microsoft-access.svg';

export interface IMicrosoftAccessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftAccessIcon: FC<IMicrosoftAccessIconProps> = memo(props => {
  return <MicrosoftAccessSvg {...props} />;
});
