import React, { FC, memo } from 'react';
import MouseSvg from '../svg/mouse.svg';

export interface IMouseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseIcon: FC<IMouseIconProps> = memo(props => {
  return <MouseSvg {...props} />;
});
