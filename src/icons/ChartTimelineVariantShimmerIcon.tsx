import React, { FC, memo } from 'react';
import ChartTimelineVariantShimmerSvg from '../svg/chart-timeline-variant-shimmer.svg';

export interface IChartTimelineVariantShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartTimelineVariantShimmerIcon: FC<IChartTimelineVariantShimmerIconProps> = memo(props => {
  return <ChartTimelineVariantShimmerSvg {...props} />;
});
