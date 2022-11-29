import React, { FC, memo } from 'react';
import ChatSvg from '../svg/chat.svg';

export interface IChatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatIcon: FC<IChatIconProps> = memo(props => {
  return <ChatSvg {...props} />;
});
