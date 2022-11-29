import React, { FC, memo } from 'react';
import MapMarkerCheckOutlineSvg from '../svg/map-marker-check-outline.svg';

export interface IMapMarkerCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerCheckOutlineIcon: FC<IMapMarkerCheckOutlineIconProps> = memo(props => {
  return <MapMarkerCheckOutlineSvg {...props} />;
});
