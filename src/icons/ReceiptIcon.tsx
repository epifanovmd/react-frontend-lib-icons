import React, { FC, memo } from 'react';
import ReceiptSvg from '../svg/receipt.svg';

export interface IReceiptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptIcon: FC<IReceiptIconProps> = memo(props => {
  return <ReceiptSvg {...props} />;
});
