import React, { FC, memo } from 'react';
import CommentEditSvg from '../svg/comment-edit.svg';

export interface ICommentEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentEditIcon: FC<ICommentEditIconProps> = memo(props => {
  return <CommentEditSvg {...props} />;
});
