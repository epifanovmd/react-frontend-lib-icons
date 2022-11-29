import React, { FC, memo } from 'react';
import WindowClosedSvg from '../svg/window-closed.svg';

export interface IWindowClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowClosedIcon: FC<IWindowClosedIconProps> = memo(props => {
  return <WindowClosedSvg {...props} />;
});
