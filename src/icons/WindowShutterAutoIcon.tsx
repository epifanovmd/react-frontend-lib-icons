import React, { FC, memo } from 'react';
import WindowShutterAutoSvg from '../svg/window-shutter-auto.svg';

export interface IWindowShutterAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterAutoIcon: FC<IWindowShutterAutoIconProps> = memo(props => {
  return <WindowShutterAutoSvg {...props} />;
});
