import React, { FC, memo } from 'react';
import MapMarkerMultipleSvg from '../svg/map-marker-multiple.svg';

export interface IMapMarkerMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerMultipleIcon: FC<IMapMarkerMultipleIconProps> = memo(props => {
  return <MapMarkerMultipleSvg {...props} />;
});
