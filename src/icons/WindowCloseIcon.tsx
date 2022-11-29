import React, { FC, memo } from 'react';
import WindowCloseSvg from '../svg/window-close.svg';

export interface IWindowCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowCloseIcon: FC<IWindowCloseIconProps> = memo(props => {
  return <WindowCloseSvg {...props} />;
});
