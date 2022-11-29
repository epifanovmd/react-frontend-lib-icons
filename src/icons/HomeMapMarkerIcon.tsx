import React, { FC, memo } from 'react';
import HomeMapMarkerSvg from '../svg/home-map-marker.svg';

export interface IHomeMapMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeMapMarkerIcon: FC<IHomeMapMarkerIconProps> = memo(props => {
  return <HomeMapMarkerSvg {...props} />;
});
