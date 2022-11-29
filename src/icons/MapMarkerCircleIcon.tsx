import React, { FC, memo } from 'react';
import MapMarkerCircleSvg from '../svg/map-marker-circle.svg';

export interface IMapMarkerCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerCircleIcon: FC<IMapMarkerCircleIconProps> = memo(props => {
  return <MapMarkerCircleSvg {...props} />;
});
