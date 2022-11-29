import React, { FC, memo } from 'react';
import VectorDifferenceBaSvg from '../svg/vector-difference-ba.svg';

export interface IVectorDifferenceBaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorDifferenceBaIcon: FC<IVectorDifferenceBaIconProps> = memo(props => {
  return <VectorDifferenceBaSvg {...props} />;
});
