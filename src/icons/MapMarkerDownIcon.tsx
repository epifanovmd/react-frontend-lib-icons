import React, { FC, memo } from 'react';
import MapMarkerDownSvg from '../svg/map-marker-down.svg';

export interface IMapMarkerDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerDownIcon: FC<IMapMarkerDownIconProps> = memo(props => {
  return <MapMarkerDownSvg {...props} />;
});
