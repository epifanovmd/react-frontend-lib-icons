import React, { FC, memo } from 'react';
import CommentSvg from '../svg/comment.svg';

export interface ICommentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentIcon: FC<ICommentIconProps> = memo(props => {
  return <CommentSvg {...props} />;
});
