import React, { FC, memo } from 'react';
import ChartWaterfallSvg from '../svg/chart-waterfall.svg';

export interface IChartWaterfallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartWaterfallIcon: FC<IChartWaterfallIconProps> = memo(props => {
  return <ChartWaterfallSvg {...props} />;
});
