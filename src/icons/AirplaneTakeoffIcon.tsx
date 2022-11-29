import React, { FC, memo } from 'react';
import AirplaneTakeoffSvg from '../svg/airplane-takeoff.svg';

export interface IAirplaneTakeoffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneTakeoffIcon: FC<IAirplaneTakeoffIconProps> = memo(props => {
  return <AirplaneTakeoffSvg {...props} />;
});
