import React, { FC, memo } from 'react';
import CommentProcessingSvg from '../svg/comment-processing.svg';

export interface ICommentProcessingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentProcessingIcon: FC<ICommentProcessingIconProps> = memo(props => {
  return <CommentProcessingSvg {...props} />;
});
