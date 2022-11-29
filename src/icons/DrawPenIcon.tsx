import React, { FC, memo } from 'react';
import DrawPenSvg from '../svg/draw-pen.svg';

export interface IDrawPenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DrawPenIcon: FC<IDrawPenIconProps> = memo(props => {
  return <DrawPenSvg {...props} />;
});
