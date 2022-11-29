import React, { FC, memo } from 'react';
import WindowShutterOpenSvg from '../svg/window-shutter-open.svg';

export interface IWindowShutterOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterOpenIcon: FC<IWindowShutterOpenIconProps> = memo(props => {
  return <WindowShutterOpenSvg {...props} />;
});
