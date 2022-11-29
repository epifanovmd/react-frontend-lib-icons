import React, { FC, memo } from 'react';
import ReceiptTextCheckSvg from '../svg/receipt-text-check.svg';

export interface IReceiptTextCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextCheckIcon: FC<IReceiptTextCheckIconProps> = memo(props => {
  return <ReceiptTextCheckSvg {...props} />;
});
