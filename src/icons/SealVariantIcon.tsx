import React, { FC, memo } from 'react';
import SealVariantSvg from '../svg/seal-variant.svg';

export interface ISealVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SealVariantIcon: FC<ISealVariantIconProps> = memo(props => {
  return <SealVariantSvg {...props} />;
});
