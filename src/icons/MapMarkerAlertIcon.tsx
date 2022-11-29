import React, { FC, memo } from 'react';
import MapMarkerAlertSvg from '../svg/map-marker-alert.svg';

export interface IMapMarkerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerAlertIcon: FC<IMapMarkerAlertIconProps> = memo(props => {
  return <MapMarkerAlertSvg {...props} />;
});
