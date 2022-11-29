import React, { FC, memo } from 'react';
import MapMarkerOffSvg from '../svg/map-marker-off.svg';

export interface IMapMarkerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerOffIcon: FC<IMapMarkerOffIconProps> = memo(props => {
  return <MapMarkerOffSvg {...props} />;
});
