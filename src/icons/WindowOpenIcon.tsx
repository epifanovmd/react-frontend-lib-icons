import React, { FC, memo } from 'react';
import WindowOpenSvg from '../svg/window-open.svg';

export interface IWindowOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowOpenIcon: FC<IWindowOpenIconProps> = memo(props => {
  return <WindowOpenSvg {...props} />;
});
