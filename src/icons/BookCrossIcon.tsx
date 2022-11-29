import React, { FC, memo } from 'react';
import BookCrossSvg from '../svg/book-cross.svg';

export interface IBookCrossIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCrossIcon: FC<IBookCrossIconProps> = memo(props => {
  return <BookCrossSvg {...props} />;
});
