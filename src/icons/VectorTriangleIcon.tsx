import React, { FC, memo } from 'react';
import VectorTriangleSvg from '../svg/vector-triangle.svg';

export interface IVectorTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorTriangleIcon: FC<IVectorTriangleIconProps> = memo(props => {
  return <VectorTriangleSvg {...props} />;
});
