import React, { FC, memo } from 'react';
import VectorRectangleSvg from '../svg/vector-rectangle.svg';

export interface IVectorRectangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorRectangleIcon: FC<IVectorRectangleIconProps> = memo(props => {
  return <VectorRectangleSvg {...props} />;
});
