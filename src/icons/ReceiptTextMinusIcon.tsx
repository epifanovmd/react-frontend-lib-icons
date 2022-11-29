import React, { FC, memo } from 'react';
import ReceiptTextMinusSvg from '../svg/receipt-text-minus.svg';

export interface IReceiptTextMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextMinusIcon: FC<IReceiptTextMinusIconProps> = memo(props => {
  return <ReceiptTextMinusSvg {...props} />;
});
