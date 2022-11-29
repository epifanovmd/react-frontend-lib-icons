import React, { FC, memo } from 'react';
import CalculatorVariantOutlineSvg from '../svg/calculator-variant-outline.svg';

export interface ICalculatorVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalculatorVariantOutlineIcon: FC<ICalculatorVariantOutlineIconProps> = memo(props => {
  return <CalculatorVariantOutlineSvg {...props} />;
});
