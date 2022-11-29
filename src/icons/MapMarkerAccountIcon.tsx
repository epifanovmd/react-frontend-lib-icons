import React, { FC, memo } from 'react';
import MapMarkerAccountSvg from '../svg/map-marker-account.svg';

export interface IMapMarkerAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapMarkerAccountIcon: FC<IMapMarkerAccountIconProps> = memo(props => {
  return <MapMarkerAccountSvg {...props} />;
});
