import React, { FC, memo } from 'react';
import LandslideSvg from '../svg/landslide.svg';

export interface ILandslideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandslideIcon: FC<ILandslideIconProps> = memo(props => {
  return <LandslideSvg {...props} />;
});
