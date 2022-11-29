import React, { FC, memo } from 'react';
import VectorDifferenceAbSvg from '../svg/vector-difference-ab.svg';

export interface IVectorDifferenceAbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorDifferenceAbIcon: FC<IVectorDifferenceAbIconProps> = memo(props => {
  return <VectorDifferenceAbSvg {...props} />;
});
