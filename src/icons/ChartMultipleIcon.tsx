import React, { FC, memo } from 'react';
import ChartMultipleSvg from '../svg/chart-multiple.svg';

export interface IChartMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartMultipleIcon: FC<IChartMultipleIconProps> = memo(props => {
  return <ChartMultipleSvg {...props} />;
});
