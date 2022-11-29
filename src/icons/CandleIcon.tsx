import React, { FC, memo } from 'react';
import CandleSvg from '../svg/candle.svg';

export interface ICandleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandleIcon: FC<ICandleIconProps> = memo(props => {
  return <CandleSvg {...props} />;
});
