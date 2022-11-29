import React, { FC, memo } from 'react';
import MapMarkerPlusOutlineSvg from '../svg/map-marker-plus-outline.svg';

export interface IMapMarkerPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerPlusOutlineIcon: FC<IMapMarkerPlusOutlineIconProps> = memo(props => {
  return <MapMarkerPlusOutlineSvg {...props} />;
});
