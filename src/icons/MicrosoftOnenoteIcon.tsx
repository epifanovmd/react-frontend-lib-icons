import React, { FC, memo } from 'react';
import MicrosoftOnenoteSvg from '../svg/microsoft-onenote.svg';

export interface IMicrosoftOnenoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftOnenoteIcon: FC<IMicrosoftOnenoteIconProps> = memo(props => {
  return <MicrosoftOnenoteSvg {...props} />;
});
