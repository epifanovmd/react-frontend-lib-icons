import React, { FC, memo } from 'react';
import ChartLineStackedSvg from '../svg/chart-line-stacked.svg';

export interface IChartLineStackedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartLineStackedIcon: FC<IChartLineStackedIconProps> = memo(props => {
  return <ChartLineStackedSvg {...props} />;
});
