import React, { FC, memo } from 'react';
import MoveResizeSvg from '../svg/move-resize.svg';

export interface IMoveResizeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoveResizeIcon: FC<IMoveResizeIconProps> = memo(props => {
  return <MoveResizeSvg {...props} />;
});
