import React, { FC, memo } from 'react';
import ReceiptTextSvg from '../svg/receipt-text.svg';

export interface IReceiptTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextIcon: FC<IReceiptTextIconProps> = memo(props => {
  return <ReceiptTextSvg {...props} />;
});
