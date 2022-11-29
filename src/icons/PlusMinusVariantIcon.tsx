import React, { FC, memo } from 'react';
import PlusMinusVariantSvg from '../svg/plus-minus-variant.svg';

export interface IPlusMinusVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusMinusVariantIcon: FC<IPlusMinusVariantIconProps> = memo(props => {
  return <PlusMinusVariantSvg {...props} />;
});
