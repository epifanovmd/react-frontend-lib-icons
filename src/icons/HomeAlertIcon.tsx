import React, { FC, memo } from 'react';
import HomeAlertSvg from '../svg/home-alert.svg';

export interface IHomeAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAlertIcon: FC<IHomeAlertIconProps> = memo(props => {
  return <HomeAlertSvg {...props} />;
});
