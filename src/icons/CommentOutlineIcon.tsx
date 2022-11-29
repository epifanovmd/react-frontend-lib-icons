import React, { FC, memo } from 'react';
import CommentOutlineSvg from '../svg/comment-outline.svg';

export interface ICommentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentOutlineIcon: FC<ICommentOutlineIconProps> = memo(props => {
  return <CommentOutlineSvg {...props} />;
});
