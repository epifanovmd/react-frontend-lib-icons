import React, { FC, memo } from 'react';
import ChatMinusSvg from '../svg/chat-minus.svg';

export interface IChatMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatMinusIcon: FC<IChatMinusIconProps> = memo(props => {
  return <ChatMinusSvg {...props} />;
});
