import React, { FC, memo } from 'react';
import CreditCardPlusSvg from '../svg/credit-card-plus.svg';

export interface ICreditCardPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardPlusIcon: FC<ICreditCardPlusIconProps> = memo(props => {
  return <CreditCardPlusSvg {...props} />;
});
