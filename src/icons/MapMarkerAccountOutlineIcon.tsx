import React, { FC, memo } from 'react';
import MapMarkerAccountOutlineSvg from '../svg/map-marker-account-outline.svg';

export interface IMapMarkerAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerAccountOutlineIcon: FC<IMapMarkerAccountOutlineIconProps> = memo(props => {
  return <MapMarkerAccountOutlineSvg {...props} />;
});
