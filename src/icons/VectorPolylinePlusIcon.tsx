import React, { FC, memo } from 'react';
import VectorPolylinePlusSvg from '../svg/vector-polyline-plus.svg';

export interface IVectorPolylinePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolylinePlusIcon: FC<IVectorPolylinePlusIconProps> = memo(props => {
  return <VectorPolylinePlusSvg {...props} />;
});
