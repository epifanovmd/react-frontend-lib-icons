import React, { FC, memo } from 'react';
import MicrosoftWindowsSvg from '../svg/microsoft-windows.svg';

export interface IMicrosoftWindowsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftWindowsIcon: FC<IMicrosoftWindowsIconProps> = memo(props => {
  return <MicrosoftWindowsSvg {...props} />;
});
