import React, { FC, memo } from 'react';
import DrawingSvg from '../svg/drawing.svg';

export interface IDrawingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DrawingIcon: FC<IDrawingIconProps> = memo(props => {
  return <DrawingSvg {...props} />;
});
