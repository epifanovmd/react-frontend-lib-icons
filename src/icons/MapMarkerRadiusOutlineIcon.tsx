import React, { FC, memo } from 'react';
import MapMarkerRadiusOutlineSvg from '../svg/map-marker-radius-outline.svg';

export interface IMapMarkerRadiusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRadiusOutlineIcon: FC<IMapMarkerRadiusOutlineIconProps> = memo(props => {
  return <MapMarkerRadiusOutlineSvg {...props} />;
});
