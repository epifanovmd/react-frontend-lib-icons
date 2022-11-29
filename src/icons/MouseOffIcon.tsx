import React, { FC, memo } from 'react';
import MouseOffSvg from '../svg/mouse-off.svg';

export interface IMouseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseOffIcon: FC<IMouseOffIconProps> = memo(props => {
  return <MouseOffSvg {...props} />;
});
