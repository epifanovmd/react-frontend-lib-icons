import React, { FC, memo } from 'react';
import MapClockSvg from '../svg/map-clock.svg';

export interface IMapClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapClockIcon: FC<IMapClockIconProps> = memo(props => {
  return <MapClockSvg {...props} />;
});
