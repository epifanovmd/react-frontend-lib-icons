import React, { FC, memo } from 'react';
import ChartSankeySvg from '../svg/chart-sankey.svg';

export interface IChartSankeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartSankeyIcon: FC<IChartSankeyIconProps> = memo(props => {
  return <ChartSankeySvg {...props} />;
});
