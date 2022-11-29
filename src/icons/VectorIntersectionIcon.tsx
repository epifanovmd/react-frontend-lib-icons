import React, { FC, memo } from 'react';
import VectorIntersectionSvg from '../svg/vector-intersection.svg';

export interface IVectorIntersectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorIntersectionIcon: FC<IVectorIntersectionIconProps> = memo(props => {
  return <VectorIntersectionSvg {...props} />;
});
