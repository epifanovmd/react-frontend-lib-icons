import React, { FC, memo } from 'react';
import ReceiptTextOutlineSvg from '../svg/receipt-text-outline.svg';

export interface IReceiptTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextOutlineIcon: FC<IReceiptTextOutlineIconProps> = memo(props => {
  return <ReceiptTextOutlineSvg {...props} />;
});
