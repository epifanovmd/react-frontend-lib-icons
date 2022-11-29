import React, { FC, memo } from 'react';
import RocketLaunchSvg from '../svg/rocket-launch.svg';

export interface IRocketLaunchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RocketLaunchIcon: FC<IRocketLaunchIconProps> = memo(props => {
  return <RocketLaunchSvg {...props} />;
});
