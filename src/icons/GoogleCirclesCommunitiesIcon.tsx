import React, { FC, memo } from 'react';
import GoogleCirclesCommunitiesSvg from '../svg/google-circles-communities.svg';

export interface IGoogleCirclesCommunitiesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCirclesCommunitiesIcon: FC<IGoogleCirclesCommunitiesIconProps> = memo(props => {
  return <GoogleCirclesCommunitiesSvg {...props} />;
});
