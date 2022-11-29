import React, { FC, memo } from 'react';
import MessageReplyOutlineSvg from '../svg/message-reply-outline.svg';

export interface IMessageReplyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageReplyOutlineIcon: FC<IMessageReplyOutlineIconProps> = memo(props => {
  return <MessageReplyOutlineSvg {...props} />;
});
