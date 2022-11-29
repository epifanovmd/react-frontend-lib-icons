import React, { FC, memo } from 'react';
import ShapeRectanglePlusSvg from '../svg/shape-rectangle-plus.svg';

export interface IShapeRectanglePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeRectanglePlusIcon: FC<IShapeRectanglePlusIconProps> = memo(props => {
  return <ShapeRectanglePlusSvg {...props} />;
});
