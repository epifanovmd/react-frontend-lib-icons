import React, { FC, memo } from 'react';
import CommentArrowRightSvg from '../svg/comment-arrow-right.svg';

export interface ICommentArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentArrowRightIcon: FC<ICommentArrowRightIconProps> = memo(props => {
  return <CommentArrowRightSvg {...props} />;
});
