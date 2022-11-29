import React, { FC, memo } from 'react';
import TransferSvg from '../svg/transfer.svg';

export interface ITransferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransferIcon: FC<ITransferIconProps> = memo(props => {
  return <TransferSvg {...props} />;
});
