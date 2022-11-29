import React, { FC, memo } from 'react';
import CreditCardSvg from '../svg/credit-card.svg';

export interface ICreditCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardIcon: FC<ICreditCardIconProps> = memo(props => {
  return <CreditCardSvg {...props} />;
});
