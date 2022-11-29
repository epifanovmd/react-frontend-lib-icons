import React, { FC, memo } from 'react';
import CommentQuoteOutlineSvg from '../svg/comment-quote-outline.svg';

export interface ICommentQuoteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentQuoteOutlineIcon: FC<ICommentQuoteOutlineIconProps> = memo(props => {
  return <CommentQuoteOutlineSvg {...props} />;
});
