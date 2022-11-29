import React, { FC, memo } from 'react';
import VectorUnionSvg from '../svg/vector-union.svg';

export interface IVectorUnionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorUnionIcon: FC<IVectorUnionIconProps> = memo(props => {
  return <VectorUnionSvg {...props} />;
});
