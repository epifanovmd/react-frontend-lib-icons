import React, { FC, memo } from 'react';
import ReceiptTextMinusOutlineSvg from '../svg/receipt-text-minus-outline.svg';

export interface IReceiptTextMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextMinusOutlineIcon: FC<IReceiptTextMinusOutlineIconProps> = memo(props => {
  return <ReceiptTextMinusOutlineSvg {...props} />;
});
