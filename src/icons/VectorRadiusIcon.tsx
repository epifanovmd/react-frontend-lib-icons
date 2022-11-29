import React, { FC, memo } from 'react';
import VectorRadiusSvg from '../svg/vector-radius.svg';

export interface IVectorRadiusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorRadiusIcon: FC<IVectorRadiusIconProps> = memo(props => {
  return <VectorRadiusSvg {...props} />;
});
