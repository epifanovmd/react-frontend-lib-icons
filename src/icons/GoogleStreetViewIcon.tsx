import React, { FC, memo } from 'react';
import GoogleStreetViewSvg from '../svg/google-street-view.svg';

export interface IGoogleStreetViewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleStreetViewIcon: FC<IGoogleStreetViewIconProps> = memo(props => {
  return <GoogleStreetViewSvg {...props} />;
});
