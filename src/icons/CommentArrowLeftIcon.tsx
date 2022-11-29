import React, { FC, memo } from 'react';
import CommentArrowLeftSvg from '../svg/comment-arrow-left.svg';

export interface ICommentArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentArrowLeftIcon: FC<ICommentArrowLeftIconProps> = memo(props => {
  return <CommentArrowLeftSvg {...props} />;
});
