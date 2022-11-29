import React, { FC, memo } from 'react';
import AirportSvg from '../svg/airport.svg';

export interface IAirportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirportIcon: FC<IAirportIconProps> = memo(props => {
  return <AirportSvg {...props} />;
});
