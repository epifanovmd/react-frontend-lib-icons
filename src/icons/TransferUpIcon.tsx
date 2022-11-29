import React, { FC, memo } from 'react';
import TransferUpSvg from '../svg/transfer-up.svg';

export interface ITransferUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransferUpIcon: FC<ITransferUpIconProps> = memo(props => {
  return <TransferUpSvg {...props} />;
});
