import React, { FC, memo } from 'react';
import TruckTrailerSvg from '../svg/truck-trailer.svg';

export interface ITruckTrailerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckTrailerIcon: FC<ITruckTrailerIconProps> = memo(props => {
  return <TruckTrailerSvg {...props} />;
});
