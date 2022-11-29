import React, { FC, memo } from 'react';
import ReceiptTextRemoveOutlineSvg from '../svg/receipt-text-remove-outline.svg';

export interface IReceiptTextRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextRemoveOutlineIcon: FC<IReceiptTextRemoveOutlineIconProps> = memo(props => {
  return <ReceiptTextRemoveOutlineSvg {...props} />;
});
