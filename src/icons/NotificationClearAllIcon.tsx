import React, { FC, memo } from 'react';
import NotificationClearAllSvg from '../svg/notification-clear-all.svg';

export interface INotificationClearAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotificationClearAllIcon: FC<INotificationClearAllIconProps> = memo(props => {
  return <NotificationClearAllSvg {...props} />;
});
