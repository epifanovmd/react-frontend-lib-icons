import React, { FC, memo } from 'react';
import MessageReplyTextSvg from '../svg/message-reply-text.svg';

export interface IMessageReplyTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageReplyTextIcon: FC<IMessageReplyTextIconProps> = memo(props => {
  return <MessageReplyTextSvg {...props} />;
});
