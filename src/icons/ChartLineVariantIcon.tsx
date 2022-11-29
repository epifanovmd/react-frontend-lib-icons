import React, { FC, memo } from 'react';
import ChartLineVariantSvg from '../svg/chart-line-variant.svg';

export interface IChartLineVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartLineVariantIcon: FC<IChartLineVariantIconProps> = memo(props => {
  return <ChartLineVariantSvg {...props} />;
});
