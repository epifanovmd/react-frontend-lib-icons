import React, { FC, memo } from 'react';
import DesktopClassicSvg from '../svg/desktop-classic.svg';

export interface IDesktopClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DesktopClassicIcon: FC<IDesktopClassicIconProps> = memo(props => {
  return <DesktopClassicSvg {...props} />;
});
