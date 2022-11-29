import React, { FC, memo } from 'react';
import MapMarkerPlusSvg from '../svg/map-marker-plus.svg';

export interface IMapMarkerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerPlusIcon: FC<IMapMarkerPlusIconProps> = memo(props => {
  return <MapMarkerPlusSvg {...props} />;
});
