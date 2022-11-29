import React, { FC, memo } from 'react';
import LaunchSvg from '../svg/launch.svg';

export interface ILaunchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaunchIcon: FC<ILaunchIconProps> = memo(props => {
  return <LaunchSvg {...props} />;
});
