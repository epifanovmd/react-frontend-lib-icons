import React, { FC, memo } from 'react';
import LandPlotsSvg from '../svg/land-plots.svg';

export interface ILandPlotsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandPlotsIcon: FC<ILandPlotsIconProps> = memo(props => {
  return <LandPlotsSvg {...props} />;
});
