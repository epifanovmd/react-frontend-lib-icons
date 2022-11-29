import React, { FC, memo } from 'react';
import GoogleAnalyticsSvg from '../svg/google-analytics.svg';

export interface IGoogleAnalyticsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleAnalyticsIcon: FC<IGoogleAnalyticsIconProps> = memo(props => {
  return <GoogleAnalyticsSvg {...props} />;
});
