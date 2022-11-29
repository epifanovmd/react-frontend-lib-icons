import React, { FC, memo } from 'react';
import LandPlotsCircleSvg from '../svg/land-plots-circle.svg';

export interface ILandPlotsCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandPlotsCircleIcon: FC<ILandPlotsCircleIconProps> = memo(props => {
  return <LandPlotsCircleSvg {...props} />;
});
