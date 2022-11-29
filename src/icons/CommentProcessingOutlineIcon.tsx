import React, { FC, memo } from 'react';
import CommentProcessingOutlineSvg from '../svg/comment-processing-outline.svg';

export interface ICommentProcessingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentProcessingOutlineIcon: FC<ICommentProcessingOutlineIconProps> = memo(props => {
  return <CommentProcessingOutlineSvg {...props} />;
});
