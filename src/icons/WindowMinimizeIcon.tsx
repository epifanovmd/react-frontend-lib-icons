import React, { FC, memo } from 'react';
import WindowMinimizeSvg from '../svg/window-minimize.svg';

export interface IWindowMinimizeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowMinimizeIcon: FC<IWindowMinimizeIconProps> = memo(props => {
  return <WindowMinimizeSvg {...props} />;
});
