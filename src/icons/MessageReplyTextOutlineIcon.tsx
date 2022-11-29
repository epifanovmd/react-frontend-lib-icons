import React, { FC, memo } from 'react';
import MessageReplyTextOutlineSvg from '../svg/message-reply-text-outline.svg';

export interface IMessageReplyTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageReplyTextOutlineIcon: FC<IMessageReplyTextOutlineIconProps> = memo(props => {
  return <MessageReplyTextOutlineSvg {...props} />;
});
