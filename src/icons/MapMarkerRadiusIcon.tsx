import React, { FC, memo } from 'react';
import MapMarkerRadiusSvg from '../svg/map-marker-radius.svg';

export interface IMapMarkerRadiusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRadiusIcon: FC<IMapMarkerRadiusIconProps> = memo(props => {
  return <MapMarkerRadiusSvg {...props} />;
});
