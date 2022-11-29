import React, { FC, memo } from 'react';
import SatelliteSvg from '../svg/satellite.svg';

export interface ISatelliteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SatelliteIcon: FC<ISatelliteIconProps> = memo(props => {
  return <SatelliteSvg {...props} />;
});
