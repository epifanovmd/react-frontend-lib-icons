import React, { FC, memo } from 'react';
import ShapeOutlineSvg from '../svg/shape-outline.svg';

export interface IShapeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShapeOutlineIcon: FC<IShapeOutlineIconProps> = memo(props => {
  return <ShapeOutlineSvg {...props} />;
});
