import React, { FC, memo } from 'react';
import SocialDistance2MetersSvg from '../svg/social-distance-2-meters.svg';

export interface ISocialDistance2MetersIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SocialDistance2MetersIcon: FC<ISocialDistance2MetersIconProps> = memo(props => {
  return <SocialDistance2MetersSvg {...props} />;
});
