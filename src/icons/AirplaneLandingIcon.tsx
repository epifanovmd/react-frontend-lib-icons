import React, { FC, memo } from 'react';
import AirplaneLandingSvg from '../svg/airplane-landing.svg';

export interface IAirplaneLandingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneLandingIcon: FC<IAirplaneLandingIconProps> = memo(props => {
  return <AirplaneLandingSvg {...props} />;
});
