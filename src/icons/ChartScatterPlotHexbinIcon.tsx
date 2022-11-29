import React, { FC, memo } from 'react';
import ChartScatterPlotHexbinSvg from '../svg/chart-scatter-plot-hexbin.svg';

export interface IChartScatterPlotHexbinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartScatterPlotHexbinIcon: FC<IChartScatterPlotHexbinIconProps> = memo(props => {
  return <ChartScatterPlotHexbinSvg {...props} />;
});
