import React, { FC, memo } from 'react';
import ShapeSvg from '../svg/shape.svg';

export interface IShapeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeIcon: FC<IShapeIconProps> = memo(props => {
  return <ShapeSvg {...props} />;
});
