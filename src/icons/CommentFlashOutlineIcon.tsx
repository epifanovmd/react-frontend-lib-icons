import React, { FC, memo } from 'react';
import CommentFlashOutlineSvg from '../svg/comment-flash-outline.svg';

export interface ICommentFlashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentFlashOutlineIcon: FC<ICommentFlashOutlineIconProps> = memo(props => {
  return <CommentFlashOutlineSvg {...props} />;
});
