import React, { FC, memo } from 'react';
import ChartPpfSvg from '../svg/chart-ppf.svg';

export interface IChartPpfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartPpfIcon: FC<IChartPpfIconProps> = memo(props => {
  return <ChartPpfSvg {...props} />;
});
