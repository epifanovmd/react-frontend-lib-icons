import React, { FC, memo } from 'react';
import CommentRemoveOutlineSvg from '../svg/comment-remove-outline.svg';

export interface ICommentRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentRemoveOutlineIcon: FC<ICommentRemoveOutlineIconProps> = memo(props => {
  return <CommentRemoveOutlineSvg {...props} />;
});
