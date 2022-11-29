import React, { FC, memo } from 'react';
import CommentMinusSvg from '../svg/comment-minus.svg';

export interface ICommentMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentMinusIcon: FC<ICommentMinusIconProps> = memo(props => {
  return <CommentMinusSvg {...props} />;
});
