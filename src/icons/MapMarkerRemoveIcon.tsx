import React, { FC, memo } from 'react';
import MapMarkerRemoveSvg from '../svg/map-marker-remove.svg';

export interface IMapMarkerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRemoveIcon: FC<IMapMarkerRemoveIconProps> = memo(props => {
  return <MapMarkerRemoveSvg {...props} />;
});
