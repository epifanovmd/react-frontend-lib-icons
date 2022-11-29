import React, { FC, memo } from 'react';
import BookSearchSvg from '../svg/book-search.svg';

export interface IBookSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSearchIcon: FC<IBookSearchIconProps> = memo(props => {
  return <BookSearchSvg {...props} />;
});
