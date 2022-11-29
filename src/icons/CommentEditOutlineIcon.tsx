import React, { FC, memo } from 'react';
import CommentEditOutlineSvg from '../svg/comment-edit-outline.svg';

export interface ICommentEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentEditOutlineIcon: FC<ICommentEditOutlineIconProps> = memo(props => {
  return <CommentEditOutlineSvg {...props} />;
});
