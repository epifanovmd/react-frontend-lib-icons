import React, { FC, memo } from 'react';
import ChartMultilineSvg from '../svg/chart-multiline.svg';

export interface IChartMultilineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartMultilineIcon: FC<IChartMultilineIconProps> = memo(props => {
  return <ChartMultilineSvg {...props} />;
});
