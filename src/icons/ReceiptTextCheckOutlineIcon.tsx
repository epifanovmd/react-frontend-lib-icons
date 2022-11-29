import React, { FC, memo } from 'react';
import ReceiptTextCheckOutlineSvg from '../svg/receipt-text-check-outline.svg';

export interface IReceiptTextCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextCheckOutlineIcon: FC<IReceiptTextCheckOutlineIconProps> = memo(props => {
  return <ReceiptTextCheckOutlineSvg {...props} />;
});
