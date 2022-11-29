import React, { FC, memo } from 'react';
import DockRightSvg from '../svg/dock-right.svg';

export interface IDockRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockRightIcon: FC<IDockRightIconProps> = memo(props => {
  return <DockRightSvg {...props} />;
});
