import React, { FC, memo } from 'react';
import ReceiptTextPlusOutlineSvg from '../svg/receipt-text-plus-outline.svg';

export interface IReceiptTextPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextPlusOutlineIcon: FC<IReceiptTextPlusOutlineIconProps> = memo(props => {
  return <ReceiptTextPlusOutlineSvg {...props} />;
});
