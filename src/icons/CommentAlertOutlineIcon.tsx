import React, { FC, memo } from 'react';
import CommentAlertOutlineSvg from '../svg/comment-alert-outline.svg';

export interface ICommentAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentAlertOutlineIcon: FC<ICommentAlertOutlineIconProps> = memo(props => {
  return <CommentAlertOutlineSvg {...props} />;
});
