import React, { FC, memo } from 'react';
import MapMarkerStarOutlineSvg from '../svg/map-marker-star-outline.svg';

export interface IMapMarkerStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerStarOutlineIcon: FC<IMapMarkerStarOutlineIconProps> = memo(props => {
  return <MapMarkerStarOutlineSvg {...props} />;
});
