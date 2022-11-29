import React, { FC, memo } from 'react';
import CommentMinusOutlineSvg from '../svg/comment-minus-outline.svg';

export interface ICommentMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentMinusOutlineIcon: FC<ICommentMinusOutlineIconProps> = memo(props => {
  return <CommentMinusOutlineSvg {...props} />;
});
