import React, { FC, memo } from 'react';
import VectorDifferenceSvg from '../svg/vector-difference.svg';

export interface IVectorDifferenceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorDifferenceIcon: FC<IVectorDifferenceIconProps> = memo(props => {
  return <VectorDifferenceSvg {...props} />;
});
