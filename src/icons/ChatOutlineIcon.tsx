import React, { FC, memo } from 'react';
import ChatOutlineSvg from '../svg/chat-outline.svg';

export interface IChatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatOutlineIcon: FC<IChatOutlineIconProps> = memo(props => {
  return <ChatOutlineSvg {...props} />;
});
