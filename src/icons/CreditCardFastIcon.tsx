import React, { FC, memo } from 'react';
import CreditCardFastSvg from '../svg/credit-card-fast.svg';

export interface ICreditCardFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardFastIcon: FC<ICreditCardFastIconProps> = memo(props => {
  return <CreditCardFastSvg {...props} />;
});
