import React, { FC, memo } from 'react';
import CommentSearchOutlineSvg from '../svg/comment-search-outline.svg';

export interface ICommentSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentSearchOutlineIcon: FC<ICommentSearchOutlineIconProps> = memo(props => {
  return <CommentSearchOutlineSvg {...props} />;
});
