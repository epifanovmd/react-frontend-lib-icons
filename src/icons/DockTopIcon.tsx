import React, { FC, memo } from 'react';
import DockTopSvg from '../svg/dock-top.svg';

export interface IDockTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockTopIcon: FC<IDockTopIconProps> = memo(props => {
  return <DockTopSvg {...props} />;
});
