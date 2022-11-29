import React, { FC, memo } from 'react';
import CommentQuestionSvg from '../svg/comment-question.svg';

export interface ICommentQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentQuestionIcon: FC<ICommentQuestionIconProps> = memo(props => {
  return <CommentQuestionSvg {...props} />;
});
