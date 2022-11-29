import React, { FC, memo } from 'react';
import MouseMoveUpSvg from '../svg/mouse-move-up.svg';

export interface IMouseMoveUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseMoveUpIcon: FC<IMouseMoveUpIconProps> = memo(props => {
  return <MouseMoveUpSvg {...props} />;
});
