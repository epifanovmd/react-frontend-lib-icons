import React, { FC, memo } from 'react';
import VectorSquarePlusSvg from '../svg/vector-square-plus.svg';

export interface IVectorSquarePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorSquarePlusIcon: FC<IVectorSquarePlusIconProps> = memo(props => {
  return <VectorSquarePlusSvg {...props} />;
});
