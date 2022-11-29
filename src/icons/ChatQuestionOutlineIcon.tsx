import React, { FC, memo } from 'react';
import ChatQuestionOutlineSvg from '../svg/chat-question-outline.svg';

export interface IChatQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatQuestionOutlineIcon: FC<IChatQuestionOutlineIconProps> = memo(props => {
  return <ChatQuestionOutlineSvg {...props} />;
});
