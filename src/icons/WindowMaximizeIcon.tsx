import React, { FC, memo } from 'react';
import WindowMaximizeSvg from '../svg/window-maximize.svg';

export interface IWindowMaximizeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowMaximizeIcon: FC<IWindowMaximizeIconProps> = memo(props => {
  return <WindowMaximizeSvg {...props} />;
});
