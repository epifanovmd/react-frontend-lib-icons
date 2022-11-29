import React, { FC, memo } from 'react';
import VectorSquareEditSvg from '../svg/vector-square-edit.svg';

export interface IVectorSquareEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquareEditIcon: FC<IVectorSquareEditIconProps> = memo(props => {
  return <VectorSquareEditSvg {...props} />;
});
