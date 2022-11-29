import React, { FC, memo } from 'react';
import MessageBadgeOutlineSvg from '../svg/message-badge-outline.svg';

export interface IMessageBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBadgeOutlineIcon: FC<IMessageBadgeOutlineIconProps> = memo(props => {
  return <MessageBadgeOutlineSvg {...props} />;
});
