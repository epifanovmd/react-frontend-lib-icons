import React, { FC, memo } from 'react';
import ChartPieSvg from '../svg/chart-pie.svg';

export interface IChartPieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartPieIcon: FC<IChartPieIconProps> = memo(props => {
  return <ChartPieSvg {...props} />;
});
