import React, { FC, memo } from 'react';
import GoogleMapsSvg from '../svg/google-maps.svg';

export interface IGoogleMapsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleMapsIcon: FC<IGoogleMapsIconProps> = memo(props => {
  return <GoogleMapsSvg {...props} />;
});
