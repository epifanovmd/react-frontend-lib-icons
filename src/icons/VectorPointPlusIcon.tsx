import React, { FC, memo } from 'react';
import VectorPointPlusSvg from '../svg/vector-point-plus.svg';

export interface IVectorPointPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPointPlusIcon: FC<IVectorPointPlusIconProps> = memo(props => {
  return <VectorPointPlusSvg {...props} />;
});
