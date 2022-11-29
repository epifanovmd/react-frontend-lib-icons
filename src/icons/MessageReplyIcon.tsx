import React, { FC, memo } from 'react';
import MessageReplySvg from '../svg/message-reply.svg';

export interface IMessageReplyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageReplyIcon: FC<IMessageReplyIconProps> = memo(props => {
  return <MessageReplySvg {...props} />;
});
