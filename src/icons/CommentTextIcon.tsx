import React, { FC, memo } from 'react';
import CommentTextSvg from '../svg/comment-text.svg';

export interface ICommentTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentTextIcon: FC<ICommentTextIconProps> = memo(props => {
  return <CommentTextSvg {...props} />;
});
