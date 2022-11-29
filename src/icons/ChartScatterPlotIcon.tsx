import React, { FC, memo } from 'react';
import ChartScatterPlotSvg from '../svg/chart-scatter-plot.svg';

export interface IChartScatterPlotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartScatterPlotIcon: FC<IChartScatterPlotIconProps> = memo(props => {
  return <ChartScatterPlotSvg {...props} />;
});
