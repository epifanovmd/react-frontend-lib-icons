import React, { FC, memo } from 'react';
import ShapeSquarePlusSvg from '../svg/shape-square-plus.svg';

export interface IShapeSquarePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeSquarePlusIcon: FC<IShapeSquarePlusIconProps> = memo(props => {
  return <ShapeSquarePlusSvg {...props} />;
});
