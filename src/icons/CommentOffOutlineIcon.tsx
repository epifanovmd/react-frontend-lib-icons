import React, { FC, memo } from 'react';
import CommentOffOutlineSvg from '../svg/comment-off-outline.svg';

export interface ICommentOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentOffOutlineIcon: FC<ICommentOffOutlineIconProps> = memo(props => {
  return <CommentOffOutlineSvg {...props} />;
});
