import React, { FC, memo } from 'react';
import TumbleDryerAlertSvg from '../svg/tumble-dryer-alert.svg';

export interface ITumbleDryerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TumbleDryerAlertIcon: FC<ITumbleDryerAlertIconProps> = memo(props => {
  return <TumbleDryerAlertSvg {...props} />;
});
