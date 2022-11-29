import React, { FC, memo } from 'react';
import CommentAlertSvg from '../svg/comment-alert.svg';

export interface ICommentAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentAlertIcon: FC<ICommentAlertIconProps> = memo(props => {
  return <CommentAlertSvg {...props} />;
});
