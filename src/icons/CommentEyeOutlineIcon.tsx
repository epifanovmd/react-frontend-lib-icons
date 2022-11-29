import React, { FC, memo } from 'react';
import CommentEyeOutlineSvg from '../svg/comment-eye-outline.svg';

export interface ICommentEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentEyeOutlineIcon: FC<ICommentEyeOutlineIconProps> = memo(props => {
  return <CommentEyeOutlineSvg {...props} />;
});
