import React, { FC, memo } from 'react';
import ChartAreasplineVariantSvg from '../svg/chart-areaspline-variant.svg';

export interface IChartAreasplineVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartAreasplineVariantIcon: FC<IChartAreasplineVariantIconProps> = memo(props => {
  return <ChartAreasplineVariantSvg {...props} />;
});
