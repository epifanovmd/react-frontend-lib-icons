import React, { FC, memo } from 'react';
import VectorSquareRemoveSvg from '../svg/vector-square-remove.svg';

export interface IVectorSquareRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareRemoveIcon: FC<IVectorSquareRemoveIconProps> = memo(props => {
  return <VectorSquareRemoveSvg {...props} />;
});
