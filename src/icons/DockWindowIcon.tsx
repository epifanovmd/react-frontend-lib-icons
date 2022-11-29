import React, { FC, memo } from 'react';
import DockWindowSvg from '../svg/dock-window.svg';

export interface IDockWindowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockWindowIcon: FC<IDockWindowIconProps> = memo(props => {
  return <DockWindowSvg {...props} />;
});
