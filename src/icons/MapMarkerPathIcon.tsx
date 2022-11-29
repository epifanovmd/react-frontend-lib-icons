import React, { FC, memo } from 'react';
import MapMarkerPathSvg from '../svg/map-marker-path.svg';

export interface IMapMarkerPathIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerPathIcon: FC<IMapMarkerPathIconProps> = memo(props => {
  return <MapMarkerPathSvg {...props} />;
});
