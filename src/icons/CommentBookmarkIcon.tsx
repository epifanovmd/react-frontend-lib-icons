import React, { FC, memo } from 'react';
import CommentBookmarkSvg from '../svg/comment-bookmark.svg';

export interface ICommentBookmarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentBookmarkIcon: FC<ICommentBookmarkIconProps> = memo(props => {
  return <CommentBookmarkSvg {...props} />;
});
