import React, { FC, memo } from 'react';
import VectorEllipseSvg from '../svg/vector-ellipse.svg';

export interface IVectorEllipseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorEllipseIcon: FC<IVectorEllipseIconProps> = memo(props => {
  return <VectorEllipseSvg {...props} />;
});
