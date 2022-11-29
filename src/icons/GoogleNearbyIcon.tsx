import React, { FC, memo } from 'react';
import GoogleNearbySvg from '../svg/google-nearby.svg';

export interface IGoogleNearbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleNearbyIcon: FC<IGoogleNearbyIconProps> = memo(props => {
  return <GoogleNearbySvg {...props} />;
});
