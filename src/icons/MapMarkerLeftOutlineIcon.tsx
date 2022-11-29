import React, { FC, memo } from 'react';
import MapMarkerLeftOutlineSvg from '../svg/map-marker-left-outline.svg';

export interface IMapMarkerLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerLeftOutlineIcon: FC<IMapMarkerLeftOutlineIconProps> = memo(props => {
  return <MapMarkerLeftOutlineSvg {...props} />;
});
