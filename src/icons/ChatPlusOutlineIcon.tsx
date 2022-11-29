import React, { FC, memo } from 'react';
import ChatPlusOutlineSvg from '../svg/chat-plus-outline.svg';

export interface IChatPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatPlusOutlineIcon: FC<IChatPlusOutlineIconProps> = memo(props => {
  return <ChatPlusOutlineSvg {...props} />;
});
