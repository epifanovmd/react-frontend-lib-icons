import React, { FC, memo } from 'react';
import ChartBellCurveSvg from '../svg/chart-bell-curve.svg';

export interface IChartBellCurveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBellCurveIcon: FC<IChartBellCurveIconProps> = memo(props => {
  return <ChartBellCurveSvg {...props} />;
});
