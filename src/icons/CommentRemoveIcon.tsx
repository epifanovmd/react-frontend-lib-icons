import React, { FC, memo } from 'react';
import CommentRemoveSvg from '../svg/comment-remove.svg';

export interface ICommentRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentRemoveIcon: FC<ICommentRemoveIconProps> = memo(props => {
  return <CommentRemoveSvg {...props} />;
});
