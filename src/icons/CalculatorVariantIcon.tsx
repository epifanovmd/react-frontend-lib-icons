import React, { FC, memo } from 'react';
import CalculatorVariantSvg from '../svg/calculator-variant.svg';

export interface ICalculatorVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalculatorVariantIcon: FC<ICalculatorVariantIconProps> = memo(props => {
  return <CalculatorVariantSvg {...props} />;
});
