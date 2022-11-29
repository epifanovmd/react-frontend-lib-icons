import React, { FC, memo } from 'react';
import BookCancelSvg from '../svg/book-cancel.svg';

export interface IBookCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCancelIcon: FC<IBookCancelIconProps> = memo(props => {
  return <BookCancelSvg {...props} />;
});
