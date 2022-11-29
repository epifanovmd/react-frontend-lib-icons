import React, { FC, memo } from 'react';
import MapMarkerUpSvg from '../svg/map-marker-up.svg';

export interface IMapMarkerUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerUpIcon: FC<IMapMarkerUpIconProps> = memo(props => {
  return <MapMarkerUpSvg {...props} />;
});
