import React, { FC, memo } from 'react';
import CommentPlusOutlineSvg from '../svg/comment-plus-outline.svg';

export interface ICommentPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentPlusOutlineIcon: FC<ICommentPlusOutlineIconProps> = memo(props => {
  return <CommentPlusOutlineSvg {...props} />;
});
