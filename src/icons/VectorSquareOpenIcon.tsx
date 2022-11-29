import React, { FC, memo } from 'react';
import VectorSquareOpenSvg from '../svg/vector-square-open.svg';

export interface IVectorSquareOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareOpenIcon: FC<IVectorSquareOpenIconProps> = memo(props => {
  return <VectorSquareOpenSvg {...props} />;
});
