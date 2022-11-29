import React, { FC, memo } from 'react';
import BankMinusSvg from '../svg/bank-minus.svg';

export interface IBankMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankMinusIcon: FC<IBankMinusIconProps> = memo(props => {
  return <BankMinusSvg {...props} />;
});
