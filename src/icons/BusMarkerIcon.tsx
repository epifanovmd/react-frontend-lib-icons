import React, { FC, memo } from 'react';
import BusMarkerSvg from '../svg/bus-marker.svg';

export interface IBusMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusMarkerIcon: FC<IBusMarkerIconProps> = memo(props => {
  return <BusMarkerSvg {...props} />;
});
