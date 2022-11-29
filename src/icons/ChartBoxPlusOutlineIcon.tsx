import React, { FC, memo } from 'react';
import ChartBoxPlusOutlineSvg from '../svg/chart-box-plus-outline.svg';

export interface IChartBoxPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartBoxPlusOutlineIcon: FC<IChartBoxPlusOutlineIconProps> = memo(props => {
  return <ChartBoxPlusOutlineSvg {...props} />;
});
