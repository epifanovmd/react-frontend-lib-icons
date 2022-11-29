import React, { FC, memo } from 'react';
import ChartBoxSvg from '../svg/chart-box.svg';

export interface IChartBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBoxIcon: FC<IChartBoxIconProps> = memo(props => {
  return <ChartBoxSvg {...props} />;
});
