import React, { FC, memo } from 'react';
import ShapePlusSvg from '../svg/shape-plus.svg';

export interface IShapePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapePlusIcon: FC<IShapePlusIconProps> = memo(props => {
  return <ShapePlusSvg {...props} />;
});
