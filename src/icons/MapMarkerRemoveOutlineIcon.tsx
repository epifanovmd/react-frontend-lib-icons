import React, { FC, memo } from 'react';
import MapMarkerRemoveOutlineSvg from '../svg/map-marker-remove-outline.svg';

export interface IMapMarkerRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerRemoveOutlineIcon: FC<IMapMarkerRemoveOutlineIconProps> = memo(props => {
  return <MapMarkerRemoveOutlineSvg {...props} />;
});
