import React, { FC, memo } from 'react';
import CommentCheckSvg from '../svg/comment-check.svg';

export interface ICommentCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentCheckIcon: FC<ICommentCheckIconProps> = memo(props => {
  return <CommentCheckSvg {...props} />;
});
