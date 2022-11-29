import React, { FC, memo } from 'react';
import StockingSvg from '../svg/stocking.svg';

export interface IStockingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StockingIcon: FC<IStockingIconProps> = memo(props => {
  return <StockingSvg {...props} />;
});
