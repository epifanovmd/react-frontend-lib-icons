import React, { FC, memo } from 'react';
import MessageQuestionSvg from '../svg/message-question.svg';

export interface IMessageQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageQuestionIcon: FC<IMessageQuestionIconProps> = memo(props => {
  return <MessageQuestionSvg {...props} />;
});
