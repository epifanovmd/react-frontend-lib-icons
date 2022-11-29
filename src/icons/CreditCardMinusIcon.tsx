import React, { FC, memo } from 'react';
import CreditCardMinusSvg from '../svg/credit-card-minus.svg';

export interface ICreditCardMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMinusIcon: FC<ICreditCardMinusIconProps> = memo(props => {
  return <CreditCardMinusSvg {...props} />;
});
