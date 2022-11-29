import React, { FC, memo } from 'react';
import VectorSelectionSvg from '../svg/vector-selection.svg';

export interface IVectorSelectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSelectionIcon: FC<IVectorSelectionIconProps> = memo(props => {
  return <VectorSelectionSvg {...props} />;
});
