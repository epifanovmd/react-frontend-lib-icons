import React, { FC, memo } from 'react';
import ChatPlusSvg from '../svg/chat-plus.svg';

export interface IChatPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatPlusIcon: FC<IChatPlusIconProps> = memo(props => {
  return <ChatPlusSvg {...props} />;
});
