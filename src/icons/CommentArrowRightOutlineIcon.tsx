import React, { FC, memo } from 'react';
import CommentArrowRightOutlineSvg from '../svg/comment-arrow-right-outline.svg';

export interface ICommentArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentArrowRightOutlineIcon: FC<ICommentArrowRightOutlineIconProps> = memo(props => {
  return <CommentArrowRightOutlineSvg {...props} />;
});
