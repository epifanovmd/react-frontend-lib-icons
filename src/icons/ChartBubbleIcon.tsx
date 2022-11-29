import React, { FC, memo } from 'react';
import ChartBubbleSvg from '../svg/chart-bubble.svg';

export interface IChartBubbleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBubbleIcon: FC<IChartBubbleIconProps> = memo(props => {
  return <ChartBubbleSvg {...props} />;
});
