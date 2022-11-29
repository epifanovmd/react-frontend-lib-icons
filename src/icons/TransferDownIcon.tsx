import React, { FC, memo } from 'react';
import TransferDownSvg from '../svg/transfer-down.svg';

export interface ITransferDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransferDownIcon: FC<ITransferDownIconProps> = memo(props => {
  return <TransferDownSvg {...props} />;
});
