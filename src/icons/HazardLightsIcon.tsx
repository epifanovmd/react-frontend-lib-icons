import React, { FC, memo } from 'react';
import HazardLightsSvg from '../svg/hazard-lights.svg';

export interface IHazardLightsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HazardLightsIcon: FC<IHazardLightsIconProps> = memo(props => {
  return <HazardLightsSvg {...props} />;
});
