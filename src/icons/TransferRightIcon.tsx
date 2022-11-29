import React, { FC, memo } from 'react';
import TransferRightSvg from '../svg/transfer-right.svg';

export interface ITransferRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransferRightIcon: FC<ITransferRightIconProps> = memo(props => {
  return <TransferRightSvg {...props} />;
});
