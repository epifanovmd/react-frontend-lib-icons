import React, { FC, memo } from 'react';
import LocationEnterSvg from '../svg/location-enter.svg';

export interface ILocationEnterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LocationEnterIcon: FC<ILocationEnterIconProps> = memo(props => {
  return <LocationEnterSvg {...props} />;
});
