import React, { FC, memo } from 'react';
import GooglePlaySvg from '../svg/google-play.svg';

export interface IGooglePlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GooglePlayIcon: FC<IGooglePlayIconProps> = memo(props => {
  return <GooglePlaySvg {...props} />;
});
