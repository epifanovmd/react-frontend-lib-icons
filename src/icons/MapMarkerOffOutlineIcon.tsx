import React, { FC, memo } from 'react';
import MapMarkerOffOutlineSvg from '../svg/map-marker-off-outline.svg';

export interface IMapMarkerOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerOffOutlineIcon: FC<IMapMarkerOffOutlineIconProps> = memo(props => {
  return <MapMarkerOffOutlineSvg {...props} />;
});
