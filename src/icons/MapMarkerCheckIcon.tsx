import React, { FC, memo } from 'react';
import MapMarkerCheckSvg from '../svg/map-marker-check.svg';

export interface IMapMarkerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerCheckIcon: FC<IMapMarkerCheckIconProps> = memo(props => {
  return <MapMarkerCheckSvg {...props} />;
});
