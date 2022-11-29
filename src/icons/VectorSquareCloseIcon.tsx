import React, { FC, memo } from 'react';
import VectorSquareCloseSvg from '../svg/vector-square-close.svg';

export interface IVectorSquareCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareCloseIcon: FC<IVectorSquareCloseIconProps> = memo(props => {
  return <VectorSquareCloseSvg {...props} />;
});
