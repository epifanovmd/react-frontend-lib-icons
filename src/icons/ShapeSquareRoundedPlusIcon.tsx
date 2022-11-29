import React, { FC, memo } from 'react';
import ShapeSquareRoundedPlusSvg from '../svg/shape-square-rounded-plus.svg';

export interface IShapeSquareRoundedPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeSquareRoundedPlusIcon: FC<IShapeSquareRoundedPlusIconProps> = memo(props => {
  return <ShapeSquareRoundedPlusSvg {...props} />;
});
