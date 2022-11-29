import React, { FC, memo } from 'react';
import CreditCardRefundOutlineSvg from '../svg/credit-card-refund-outline.svg';

export interface ICreditCardRefundOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardRefundOutlineIcon: FC<ICreditCardRefundOutlineIconProps> = memo(props => {
  return <CreditCardRefundOutlineSvg {...props} />;
});
