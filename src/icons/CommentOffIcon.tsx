import React, { FC, memo } from 'react';
import CommentOffSvg from '../svg/comment-off.svg';

export interface ICommentOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentOffIcon: FC<ICommentOffIconProps> = memo(props => {
  return <CommentOffSvg {...props} />;
});
