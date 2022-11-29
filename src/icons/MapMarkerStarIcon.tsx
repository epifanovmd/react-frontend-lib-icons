import React, { FC, memo } from 'react';
import MapMarkerStarSvg from '../svg/map-marker-star.svg';

export interface IMapMarkerStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerStarIcon: FC<IMapMarkerStarIconProps> = memo(props => {
  return <MapMarkerStarSvg {...props} />;
});
