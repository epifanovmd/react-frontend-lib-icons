import React, { FC, memo } from 'react';
import ReceiptOutlineSvg from '../svg/receipt-outline.svg';

export interface IReceiptOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptOutlineIcon: FC<IReceiptOutlineIconProps> = memo(props => {
  return <ReceiptOutlineSvg {...props} />;
});
