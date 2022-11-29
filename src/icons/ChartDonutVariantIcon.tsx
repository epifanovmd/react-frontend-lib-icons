import React, { FC, memo } from 'react';
import ChartDonutVariantSvg from '../svg/chart-donut-variant.svg';

export interface IChartDonutVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartDonutVariantIcon: FC<IChartDonutVariantIconProps> = memo(props => {
  return <ChartDonutVariantSvg {...props} />;
});
