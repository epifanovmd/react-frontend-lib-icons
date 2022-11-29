import React, { FC, memo } from 'react';
import CommentTextOutlineSvg from '../svg/comment-text-outline.svg';

export interface ICommentTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentTextOutlineIcon: FC<ICommentTextOutlineIconProps> = memo(props => {
  return <CommentTextOutlineSvg {...props} />;
});
