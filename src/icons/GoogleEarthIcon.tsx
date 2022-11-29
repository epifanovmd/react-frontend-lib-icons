import React, { FC, memo } from 'react';
import GoogleEarthSvg from '../svg/google-earth.svg';

export interface IGoogleEarthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleEarthIcon: FC<IGoogleEarthIconProps> = memo(props => {
  return <GoogleEarthSvg {...props} />;
});
