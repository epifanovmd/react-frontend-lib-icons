import React, { FC, memo } from 'react';
import MouseMoveVerticalSvg from '../svg/mouse-move-vertical.svg';

export interface IMouseMoveVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseMoveVerticalIcon: FC<IMouseMoveVerticalIconProps> = memo(props => {
  return <MouseMoveVerticalSvg {...props} />;
});
