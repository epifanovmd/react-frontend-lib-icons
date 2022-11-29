import React, { FC, memo } from 'react';
import BankTransferOutSvg from '../svg/bank-transfer-out.svg';

export interface IBankTransferOutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankTransferOutIcon: FC<IBankTransferOutIconProps> = memo(props => {
  return <BankTransferOutSvg {...props} />;
});
