import React, { FC, memo } from 'react';
import ChatMinusOutlineSvg from '../svg/chat-minus-outline.svg';

export interface IChatMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatMinusOutlineIcon: FC<IChatMinusOutlineIconProps> = memo(props => {
  return <ChatMinusOutlineSvg {...props} />;
});
