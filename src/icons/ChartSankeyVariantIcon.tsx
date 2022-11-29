import React, { FC, memo } from 'react';
import ChartSankeyVariantSvg from '../svg/chart-sankey-variant.svg';

export interface IChartSankeyVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartSankeyVariantIcon: FC<IChartSankeyVariantIconProps> = memo(props => {
  return <ChartSankeyVariantSvg {...props} />;
});
