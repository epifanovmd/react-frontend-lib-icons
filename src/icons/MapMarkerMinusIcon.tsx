import React, { FC, memo } from 'react';
import MapMarkerMinusSvg from '../svg/map-marker-minus.svg';

export interface IMapMarkerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerMinusIcon: FC<IMapMarkerMinusIconProps> = memo(props => {
  return <MapMarkerMinusSvg {...props} />;
});
