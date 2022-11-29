import React, { FC, memo } from 'react';
import CommentQuestionOutlineSvg from '../svg/comment-question-outline.svg';

export interface ICommentQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentQuestionOutlineIcon: FC<ICommentQuestionOutlineIconProps> = memo(props => {
  return <CommentQuestionOutlineSvg {...props} />;
});
