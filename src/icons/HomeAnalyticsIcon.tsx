import React, { FC, memo } from 'react';
import HomeAnalyticsSvg from '../svg/home-analytics.svg';

export interface IHomeAnalyticsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAnalyticsIcon: FC<IHomeAnalyticsIconProps> = memo(props => {
  return <HomeAnalyticsSvg {...props} />;
});
