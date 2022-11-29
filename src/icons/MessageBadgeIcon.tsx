import React, { FC, memo } from 'react';
import MessageBadgeSvg from '../svg/message-badge.svg';

export interface IMessageBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBadgeIcon: FC<IMessageBadgeIconProps> = memo(props => {
  return <MessageBadgeSvg {...props} />;
});
