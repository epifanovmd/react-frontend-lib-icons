import React, { FC, memo } from 'react';
import MapMarkerSvg from '../svg/map-marker.svg';

export interface IMapMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerIcon: FC<IMapMarkerIconProps> = memo(props => {
  return <MapMarkerSvg {...props} />;
});
