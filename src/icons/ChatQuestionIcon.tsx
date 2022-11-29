import React, { FC, memo } from 'react';
import ChatQuestionSvg from '../svg/chat-question.svg';

export interface IChatQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatQuestionIcon: FC<IChatQuestionIconProps> = memo(props => {
  return <ChatQuestionSvg {...props} />;
});
