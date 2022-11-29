import React, { FC, memo } from 'react';
import CommentCheckOutlineSvg from '../svg/comment-check-outline.svg';

export interface ICommentCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentCheckOutlineIcon: FC<ICommentCheckOutlineIconProps> = memo(props => {
  return <CommentCheckOutlineSvg {...props} />;
});
