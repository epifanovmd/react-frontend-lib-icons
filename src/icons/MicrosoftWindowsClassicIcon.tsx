import React, { FC, memo } from 'react';
import MicrosoftWindowsClassicSvg from '../svg/microsoft-windows-classic.svg';

export interface IMicrosoftWindowsClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftWindowsClassicIcon: FC<IMicrosoftWindowsClassicIconProps> = memo(props => {
  return <MicrosoftWindowsClassicSvg {...props} />;
});
