import React, { FC, memo } from 'react';
import VectorBezierSvg from '../svg/vector-bezier.svg';

export interface IVectorBezierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorBezierIcon: FC<IVectorBezierIconProps> = memo(props => {
  return <VectorBezierSvg {...props} />;
});
