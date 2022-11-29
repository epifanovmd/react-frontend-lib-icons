import React, { FC, memo } from 'react';
import MapMarkerDistanceSvg from '../svg/map-marker-distance.svg';

export interface IMapMarkerDistanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerDistanceIcon: FC<IMapMarkerDistanceIconProps> = memo(props => {
  return <MapMarkerDistanceSvg {...props} />;
});
