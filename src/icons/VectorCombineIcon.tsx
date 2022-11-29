import React, { FC, memo } from 'react';
import VectorCombineSvg from '../svg/vector-combine.svg';

export interface IVectorCombineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorCombineIcon: FC<IVectorCombineIconProps> = memo(props => {
  return <VectorCombineSvg {...props} />;
});
