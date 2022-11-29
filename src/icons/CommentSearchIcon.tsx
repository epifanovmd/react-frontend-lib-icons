import React, { FC, memo } from 'react';
import CommentSearchSvg from '../svg/comment-search.svg';

export interface ICommentSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentSearchIcon: FC<ICommentSearchIconProps> = memo(props => {
  return <CommentSearchSvg {...props} />;
});
