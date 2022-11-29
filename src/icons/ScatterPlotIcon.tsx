import React, { FC, memo } from 'react';
import ScatterPlotSvg from '../svg/scatter-plot.svg';

export interface IScatterPlotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScatterPlotIcon: FC<IScatterPlotIconProps> = memo(props => {
  return <ScatterPlotSvg {...props} />;
});
