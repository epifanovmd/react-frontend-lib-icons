import React, { FC, memo } from 'react';
import DrawingBoxSvg from '../svg/drawing-box.svg';

export interface IDrawingBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DrawingBoxIcon: FC<IDrawingBoxIconProps> = memo(props => {
  return <DrawingBoxSvg {...props} />;
});
