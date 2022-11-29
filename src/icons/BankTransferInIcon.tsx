import React, { FC, memo } from 'react';
import BankTransferInSvg from '../svg/bank-transfer-in.svg';

export interface IBankTransferInIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankTransferInIcon: FC<IBankTransferInIconProps> = memo(props => {
  return <BankTransferInSvg {...props} />;
});
