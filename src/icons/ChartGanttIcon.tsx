import React, { FC, memo } from 'react';
import ChartGanttSvg from '../svg/chart-gantt.svg';

export interface IChartGanttIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartGanttIcon: FC<IChartGanttIconProps> = memo(props => {
  return <ChartGanttSvg {...props} />;
});
