import React, { FC, memo } from 'react';
import ChartBellCurveCumulativeSvg from '../svg/chart-bell-curve-cumulative.svg';

export interface IChartBellCurveCumulativeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBellCurveCumulativeIcon: FC<IChartBellCurveCumulativeIconProps> = memo(props => {
  return <ChartBellCurveCumulativeSvg {...props} />;
});
