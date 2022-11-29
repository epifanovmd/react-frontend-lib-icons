import React, { FC, memo } from 'react';
import ChartTimelineSvg from '../svg/chart-timeline.svg';

export interface IChartTimelineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartTimelineIcon: FC<IChartTimelineIconProps> = memo(props => {
  return <ChartTimelineSvg {...props} />;
});
