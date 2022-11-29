import React, { FC, memo } from 'react';
import VectorPointSvg from '../svg/vector-point.svg';

export interface IVectorPointIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPointIcon: FC<IVectorPointIconProps> = memo(props => {
  return <VectorPointSvg {...props} />;
});
