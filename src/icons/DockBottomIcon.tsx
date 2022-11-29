import React, { FC, memo } from 'react';
import DockBottomSvg from '../svg/dock-bottom.svg';

export interface IDockBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockBottomIcon: FC<IDockBottomIconProps> = memo(props => {
  return <DockBottomSvg {...props} />;
});
