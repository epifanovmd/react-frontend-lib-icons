import React, { FC, memo } from 'react';
import CommentEyeSvg from '../svg/comment-eye.svg';

export interface ICommentEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentEyeIcon: FC<ICommentEyeIconProps> = memo(props => {
  return <CommentEyeSvg {...props} />;
});
