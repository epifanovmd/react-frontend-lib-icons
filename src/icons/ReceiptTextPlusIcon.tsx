import React, { FC, memo } from 'react';
import ReceiptTextPlusSvg from '../svg/receipt-text-plus.svg';

export interface IReceiptTextPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextPlusIcon: FC<IReceiptTextPlusIconProps> = memo(props => {
  return <ReceiptTextPlusSvg {...props} />;
});
