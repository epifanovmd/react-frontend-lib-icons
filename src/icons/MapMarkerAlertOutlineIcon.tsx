import React, { FC, memo } from 'react';
import MapMarkerAlertOutlineSvg from '../svg/map-marker-alert-outline.svg';

export interface IMapMarkerAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerAlertOutlineIcon: FC<IMapMarkerAlertOutlineIconProps> = memo(props => {
  return <MapMarkerAlertOutlineSvg {...props} />;
});
