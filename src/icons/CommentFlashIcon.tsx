import React, { FC, memo } from 'react';
import CommentFlashSvg from '../svg/comment-flash.svg';

export interface ICommentFlashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentFlashIcon: FC<ICommentFlashIconProps> = memo(props => {
  return <CommentFlashSvg {...props} />;
});
