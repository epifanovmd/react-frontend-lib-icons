import React, { FC, memo } from 'react';
import ChatSleepOutlineSvg from '../svg/chat-sleep-outline.svg';

export interface IChatSleepOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatSleepOutlineIcon: FC<IChatSleepOutlineIconProps> = memo(props => {
  return <ChatSleepOutlineSvg {...props} />;
});
