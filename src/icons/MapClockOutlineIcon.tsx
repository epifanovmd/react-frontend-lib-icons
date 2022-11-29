import React, { FC, memo } from 'react';
import MapClockOutlineSvg from '../svg/map-clock-outline.svg';

export interface IMapClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MapClockOutlineIcon: FC<IMapClockOutlineIconProps> = memo(props => {
  return <MapClockOutlineSvg {...props} />;
});
