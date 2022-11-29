import React, { FC, memo } from 'react';
import VectorSquareMinusSvg from '../svg/vector-square-minus.svg';

export interface IVectorSquareMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareMinusIcon: FC<IVectorSquareMinusIconProps> = memo(props => {
  return <VectorSquareMinusSvg {...props} />;
});
