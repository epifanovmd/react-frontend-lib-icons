import React, { FC, memo } from 'react';
import TrademarkSvg from '../svg/trademark.svg';

export interface ITrademarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrademarkIcon: FC<ITrademarkIconProps> = memo(props => {
  return <TrademarkSvg {...props} />;
});
