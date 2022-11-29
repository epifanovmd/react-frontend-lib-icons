import React, { FC, memo } from 'react';
import TransferLeftSvg from '../svg/transfer-left.svg';

export interface ITransferLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransferLeftIcon: FC<ITransferLeftIconProps> = memo(props => {
  return <TransferLeftSvg {...props} />;
});
