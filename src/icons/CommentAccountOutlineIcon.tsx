import React, { FC, memo } from 'react';
import CommentAccountOutlineSvg from '../svg/comment-account-outline.svg';

export interface ICommentAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentAccountOutlineIcon: FC<ICommentAccountOutlineIconProps> = memo(props => {
  return <CommentAccountOutlineSvg {...props} />;
});
