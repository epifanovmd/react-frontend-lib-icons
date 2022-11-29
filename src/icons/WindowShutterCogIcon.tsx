import React, { FC, memo } from 'react';
import WindowShutterCogSvg from '../svg/window-shutter-cog.svg';

export interface IWindowShutterCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterCogIcon: FC<IWindowShutterCogIconProps> = memo(props => {
  return <WindowShutterCogSvg {...props} />;
});
