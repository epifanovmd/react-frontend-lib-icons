import React, { FC, memo } from 'react';
import CreditCardRefundSvg from '../svg/credit-card-refund.svg';

export interface ICreditCardRefundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRefundIcon: FC<ICreditCardRefundIconProps> = memo(props => {
  return <CreditCardRefundSvg {...props} />;
});
