import React, { FC, memo } from 'react';
import ChatProcessingSvg from '../svg/chat-processing.svg';

export interface IChatProcessingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatProcessingIcon: FC<IChatProcessingIconProps> = memo(props => {
  return <ChatProcessingSvg {...props} />;
});
