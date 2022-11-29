import React, { FC, memo } from 'react';
import ChartBarSvg from '../svg/chart-bar.svg';

export interface IChartBarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBarIcon: FC<IChartBarIconProps> = memo(props => {
  return <ChartBarSvg {...props} />;
});
