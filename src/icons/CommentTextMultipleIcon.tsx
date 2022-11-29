import React, { FC, memo } from 'react';
import CommentTextMultipleSvg from '../svg/comment-text-multiple.svg';

export interface ICommentTextMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentTextMultipleIcon: FC<ICommentTextMultipleIconProps> = memo(props => {
  return <CommentTextMultipleSvg {...props} />;
});
