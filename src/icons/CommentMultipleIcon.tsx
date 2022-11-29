import React, { FC, memo } from 'react';
import CommentMultipleSvg from '../svg/comment-multiple.svg';

export interface ICommentMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentMultipleIcon: FC<ICommentMultipleIconProps> = memo(props => {
  return <CommentMultipleSvg {...props} />;
});
