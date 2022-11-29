import React, { FC, memo } from 'react';
import BankTransferSvg from '../svg/bank-transfer.svg';

export interface IBankTransferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankTransferIcon: FC<IBankTransferIconProps> = memo(props => {
  return <BankTransferSvg {...props} />;
});
