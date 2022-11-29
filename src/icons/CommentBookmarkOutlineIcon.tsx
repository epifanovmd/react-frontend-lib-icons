import React, { FC, memo } from 'react';
import CommentBookmarkOutlineSvg from '../svg/comment-bookmark-outline.svg';

export interface ICommentBookmarkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentBookmarkOutlineIcon: FC<ICommentBookmarkOutlineIconProps> = memo(props => {
  return <CommentBookmarkOutlineSvg {...props} />;
});
