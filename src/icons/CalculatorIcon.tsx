import React, { FC, memo } from 'react';
import CalculatorSvg from '../svg/calculator.svg';

export interface ICalculatorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CalculatorIcon: FC<ICalculatorIconProps> = memo(props => {
  return <CalculatorSvg {...props} />;
});
