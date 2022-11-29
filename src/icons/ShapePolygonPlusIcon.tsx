import React, { FC, memo } from 'react';
import ShapePolygonPlusSvg from '../svg/shape-polygon-plus.svg';

export interface IShapePolygonPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapePolygonPlusIcon: FC<IShapePolygonPlusIconProps> = memo(props => {
  return <ShapePolygonPlusSvg {...props} />;
});
