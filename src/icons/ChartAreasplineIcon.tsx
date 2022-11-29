import React, { FC, memo } from 'react';
import ChartAreasplineSvg from '../svg/chart-areaspline.svg';

export interface IChartAreasplineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartAreasplineIcon: FC<IChartAreasplineIconProps> = memo(props => {
  return <ChartAreasplineSvg {...props} />;
});
