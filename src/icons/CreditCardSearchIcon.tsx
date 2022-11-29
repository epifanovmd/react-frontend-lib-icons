import React, { FC, memo } from 'react';
import CreditCardSearchSvg from '../svg/credit-card-search.svg';

export interface ICreditCardSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSearchIcon: FC<ICreditCardSearchIconProps> = memo(props => {
  return <CreditCardSearchSvg {...props} />;
});
