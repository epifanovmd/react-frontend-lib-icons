import React, { FC, memo } from 'react';
import CreditCardMinusOutlineSvg from '../svg/credit-card-minus-outline.svg';

export interface ICreditCardMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardMinusOutlineIcon: FC<ICreditCardMinusOutlineIconProps> = memo(props => {
  return <CreditCardMinusOutlineSvg {...props} />;
});
