import React, { FC, memo } from 'react';
import VectorCircleVariantSvg from '../svg/vector-circle-variant.svg';

export interface IVectorCircleVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorCircleVariantIcon: FC<IVectorCircleVariantIconProps> = memo(props => {
  return <VectorCircleVariantSvg {...props} />;
});
