import React, { FC, memo } from 'react';
import VectorPointMinusSvg from '../svg/vector-point-minus.svg';

export interface IVectorPointMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPointMinusIcon: FC<IVectorPointMinusIconProps> = memo(props => {
  return <VectorPointMinusSvg {...props} />;
});
