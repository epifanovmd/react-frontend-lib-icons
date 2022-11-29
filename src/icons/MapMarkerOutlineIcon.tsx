import React, { FC, memo } from 'react';
import MapMarkerOutlineSvg from '../svg/map-marker-outline.svg';

export interface IMapMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerOutlineIcon: FC<IMapMarkerOutlineIconProps> = memo(props => {
  return <MapMarkerOutlineSvg {...props} />;
});
