import React, { FC, memo } from 'react';
import ChatSleepSvg from '../svg/chat-sleep.svg';

export interface IChatSleepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatSleepIcon: FC<IChatSleepIconProps> = memo(props => {
  return <ChatSleepSvg {...props} />;
});
