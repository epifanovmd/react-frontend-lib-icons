import React, { FC, memo } from 'react';
import CommentMultipleOutlineSvg from '../svg/comment-multiple-outline.svg';

export interface ICommentMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentMultipleOutlineIcon: FC<ICommentMultipleOutlineIconProps> = memo(props => {
  return <CommentMultipleOutlineSvg {...props} />;
});
