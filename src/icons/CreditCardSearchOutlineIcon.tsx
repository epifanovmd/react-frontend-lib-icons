import React, { FC, memo } from 'react';
import CreditCardSearchOutlineSvg from '../svg/credit-card-search-outline.svg';

export interface ICreditCardSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSearchOutlineIcon: FC<ICreditCardSearchOutlineIconProps> = memo(props => {
  return <CreditCardSearchOutlineSvg {...props} />;
});
