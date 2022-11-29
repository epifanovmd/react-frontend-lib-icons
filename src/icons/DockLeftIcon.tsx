import React, { FC, memo } from 'react';
import DockLeftSvg from '../svg/dock-left.svg';

export interface IDockLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockLeftIcon: FC<IDockLeftIconProps> = memo(props => {
  return <DockLeftSvg {...props} />;
});
