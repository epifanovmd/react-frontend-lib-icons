import React, { FC, memo } from 'react';
import ReceiptTextRemoveSvg from '../svg/receipt-text-remove.svg';

export interface IReceiptTextRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReceiptTextRemoveIcon: FC<IReceiptTextRemoveIconProps> = memo(props => {
  return <ReceiptTextRemoveSvg {...props} />;
});
