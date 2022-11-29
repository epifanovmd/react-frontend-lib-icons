import React, { FC, memo } from 'react';
import ChartLineSvg from '../svg/chart-line.svg';

export interface IChartLineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartLineIcon: FC<IChartLineIconProps> = memo(props => {
  return <ChartLineSvg {...props} />;
});
