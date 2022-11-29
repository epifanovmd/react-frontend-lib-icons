import React, { FC, memo } from 'react';
import ScatterPlotOutlineSvg from '../svg/scatter-plot-outline.svg';

export interface IScatterPlotOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScatterPlotOutlineIcon: FC<IScatterPlotOutlineIconProps> = memo(props => {
  return <ScatterPlotOutlineSvg {...props} />;
});
