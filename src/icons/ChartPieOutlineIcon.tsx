import React, { FC, memo } from 'react';
import ChartPieOutlineSvg from '../svg/chart-pie-outline.svg';

export interface IChartPieOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartPieOutlineIcon: FC<IChartPieOutlineIconProps> = memo(props => {
  return <ChartPieOutlineSvg {...props} />;
});
