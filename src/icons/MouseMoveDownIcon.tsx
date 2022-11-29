import React, { FC, memo } from 'react';
import MouseMoveDownSvg from '../svg/mouse-move-down.svg';

export interface IMouseMoveDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseMoveDownIcon: FC<IMouseMoveDownIconProps> = memo(props => {
  return <MouseMoveDownSvg {...props} />;
});
