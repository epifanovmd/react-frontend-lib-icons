import React, { FC, memo } from 'react';
import VectorSquareSvg from '../svg/vector-square.svg';

export interface IVectorSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareIcon: FC<IVectorSquareIconProps> = memo(props => {
  return <VectorSquareSvg {...props} />;
});
