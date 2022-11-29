import React, { FC, memo } from 'react';
import ChartDonutSvg from '../svg/chart-donut.svg';

export interface IChartDonutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartDonutIcon: FC<IChartDonutIconProps> = memo(props => {
  return <ChartDonutSvg {...props} />;
});
