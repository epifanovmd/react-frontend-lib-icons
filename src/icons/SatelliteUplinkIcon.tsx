import React, { FC, memo } from 'react';
import SatelliteUplinkSvg from '../svg/satellite-uplink.svg';

export interface ISatelliteUplinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SatelliteUplinkIcon: FC<ISatelliteUplinkIconProps> = memo(props => {
  return <SatelliteUplinkSvg {...props} />;
});
