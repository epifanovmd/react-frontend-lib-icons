import React, { FC, memo } from 'react';
import VectorArrangeBelowSvg from '../svg/vector-arrange-below.svg';

export interface IVectorArrangeBelowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorArrangeBelowIcon: FC<IVectorArrangeBelowIconProps> = memo(props => {
  return <VectorArrangeBelowSvg {...props} />;
});
