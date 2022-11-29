import React, { FC, memo } from 'react';
import AirplaneMarkerSvg from '../svg/airplane-marker.svg';

export interface IAirplaneMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneMarkerIcon: FC<IAirplaneMarkerIconProps> = memo(props => {
  return <AirplaneMarkerSvg {...props} />;
});
