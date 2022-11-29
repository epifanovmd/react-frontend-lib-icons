import React, { FC, memo } from 'react';
import CommentTextMultipleOutlineSvg from '../svg/comment-text-multiple-outline.svg';

export interface ICommentTextMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentTextMultipleOutlineIcon: FC<ICommentTextMultipleOutlineIconProps> = memo(props => {
  return <CommentTextMultipleOutlineSvg {...props} />;
});
