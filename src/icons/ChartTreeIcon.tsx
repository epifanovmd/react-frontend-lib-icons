import React, { FC, memo } from 'react';
import ChartTreeSvg from '../svg/chart-tree.svg';

export interface IChartTreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartTreeIcon: FC<IChartTreeIconProps> = memo(props => {
  return <ChartTreeSvg {...props} />;
});
