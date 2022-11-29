import React, { FC, memo } from 'react';
import BookSearchOutlineSvg from '../svg/book-search-outline.svg';

export interface IBookSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSearchOutlineIcon: FC<IBookSearchOutlineIconProps> = memo(props => {
  return <BookSearchOutlineSvg {...props} />;
});
