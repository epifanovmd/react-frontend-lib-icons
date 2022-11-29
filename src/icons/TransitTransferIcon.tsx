import React, { FC, memo } from 'react';
import TransitTransferSvg from '../svg/transit-transfer.svg';

export interface ITransitTransferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitTransferIcon: FC<ITransitTransferIconProps> = memo(props => {
  return <TransitTransferSvg {...props} />;
});
