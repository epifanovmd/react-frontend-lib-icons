import React, { FC, memo } from 'react';
import MapMarkerRightSvg from '../svg/map-marker-right.svg';

export interface IMapMarkerRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRightIcon: FC<IMapMarkerRightIconProps> = memo(props => {
  return <MapMarkerRightSvg {...props} />;
});
