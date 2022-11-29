import React, { FC, memo } from 'react';
import ShapeCirclePlusSvg from '../svg/shape-circle-plus.svg';

export interface IShapeCirclePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeCirclePlusIcon: FC<IShapeCirclePlusIconProps> = memo(props => {
  return <ShapeCirclePlusSvg {...props} />;
});
