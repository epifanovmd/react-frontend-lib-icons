import React, { FC, memo } from 'react';
import GoogleAdsSvg from '../svg/google-ads.svg';

export interface IGoogleAdsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleAdsIcon: FC<IGoogleAdsIconProps> = memo(props => {
  return <GoogleAdsSvg {...props} />;
});
