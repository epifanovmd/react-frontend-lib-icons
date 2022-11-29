import React, { FC, memo } from 'react';
import MapMarkerLeftSvg from '../svg/map-marker-left.svg';

export interface IMapMarkerLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerLeftIcon: FC<IMapMarkerLeftIconProps> = memo(props => {
  return <MapMarkerLeftSvg {...props} />;
});
