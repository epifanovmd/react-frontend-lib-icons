import React, { FC, memo } from 'react';
import MapMarkerMultipleOutlineSvg from '../svg/map-marker-multiple-outline.svg';

export interface IMapMarkerMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerMultipleOutlineIcon: FC<IMapMarkerMultipleOutlineIconProps> = memo(props => {
  return <MapMarkerMultipleOutlineSvg {...props} />;
});
