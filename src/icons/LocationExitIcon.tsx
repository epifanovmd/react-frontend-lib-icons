import React, { FC, memo } from 'react';
import LocationExitSvg from '../svg/location-exit.svg';

export interface ILocationExitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LocationExitIcon: FC<ILocationExitIconProps> = memo(props => {
  return <LocationExitSvg {...props} />;
});
