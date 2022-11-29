import React, { FC, memo } from 'react';
import GoogleHangoutsSvg from '../svg/google-hangouts.svg';

export interface IGoogleHangoutsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleHangoutsIcon: FC<IGoogleHangoutsIconProps> = memo(props => {
  return <GoogleHangoutsSvg {...props} />;
});
