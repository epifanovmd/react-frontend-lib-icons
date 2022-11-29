import React, { FC, memo } from 'react';
import ChartTimelineVariantSvg from '../svg/chart-timeline-variant.svg';

export interface IChartTimelineVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartTimelineVariantIcon: FC<IChartTimelineVariantIconProps> = memo(props => {
  return <ChartTimelineVariantSvg {...props} />;
});
