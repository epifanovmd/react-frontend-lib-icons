import React, { FC, memo } from 'react';
import WindowShutterSvg from '../svg/window-shutter.svg';

export interface IWindowShutterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterIcon: FC<IWindowShutterIconProps> = memo(props => {
  return <WindowShutterSvg {...props} />;
});
