import React, { FC, memo } from 'react';
import ChartBarStackedSvg from '../svg/chart-bar-stacked.svg';

export interface IChartBarStackedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBarStackedIcon: FC<IChartBarStackedIconProps> = memo(props => {
  return <ChartBarStackedSvg {...props} />;
});
