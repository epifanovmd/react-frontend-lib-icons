import React, { FC, memo } from 'react';
import ChartBoxOutlineSvg from '../svg/chart-box-outline.svg';

export interface IChartBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBoxOutlineIcon: FC<IChartBoxOutlineIconProps> = memo(props => {
  return <ChartBoxOutlineSvg {...props} />;
});
