import React, { FC, memo } from 'react';
import ShapeOvalPlusSvg from '../svg/shape-oval-plus.svg';

export interface IShapeOvalPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeOvalPlusIcon: FC<IShapeOvalPlusIconProps> = memo(props => {
  return <ShapeOvalPlusSvg {...props} />;
});
