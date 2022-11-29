import React, { FC, memo } from 'react';
import CommentArrowLeftOutlineSvg from '../svg/comment-arrow-left-outline.svg';

export interface ICommentArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentArrowLeftOutlineIcon: FC<ICommentArrowLeftOutlineIconProps> = memo(props => {
  return <CommentArrowLeftOutlineSvg {...props} />;
});
