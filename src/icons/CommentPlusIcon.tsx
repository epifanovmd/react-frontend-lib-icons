import React, { FC, memo } from 'react';
import CommentPlusSvg from '../svg/comment-plus.svg';

export interface ICommentPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentPlusIcon: FC<ICommentPlusIconProps> = memo(props => {
  return <CommentPlusSvg {...props} />;
});
