import React, { FC, memo } from 'react';
import CommentAccountSvg from '../svg/comment-account.svg';

export interface ICommentAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentAccountIcon: FC<ICommentAccountIconProps> = memo(props => {
  return <CommentAccountSvg {...props} />;
});
