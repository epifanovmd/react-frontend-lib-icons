import React, { FC, memo } from 'react';
import CreditCardPlusOutlineSvg from '../svg/credit-card-plus-outline.svg';

export interface ICreditCardPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardPlusOutlineIcon: FC<ICreditCardPlusOutlineIconProps> = memo(props => {
  return <CreditCardPlusOutlineSvg {...props} />;
});
