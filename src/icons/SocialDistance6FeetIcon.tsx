import React, { FC, memo } from 'react';
import SocialDistance6FeetSvg from '../svg/social-distance-6-feet.svg';

export interface ISocialDistance6FeetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SocialDistance6FeetIcon: FC<ISocialDistance6FeetIconProps> = memo(props => {
  return <SocialDistance6FeetSvg {...props} />;
});
