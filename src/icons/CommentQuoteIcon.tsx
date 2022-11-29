import React, { FC, memo } from 'react';
import CommentQuoteSvg from '../svg/comment-quote.svg';

export interface ICommentQuoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommentQuoteIcon: FC<ICommentQuoteIconProps> = memo(props => {
  return <CommentQuoteSvg {...props} />;
});
