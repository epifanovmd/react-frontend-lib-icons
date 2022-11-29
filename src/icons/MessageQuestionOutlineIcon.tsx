import React, { FC, memo } from 'react';
import MessageQuestionOutlineSvg from '../svg/message-question-outline.svg';

export interface IMessageQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageQuestionOutlineIcon: FC<IMessageQuestionOutlineIconProps> = memo(props => {
  return <MessageQuestionOutlineSvg {...props} />;
});
