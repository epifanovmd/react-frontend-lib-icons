import React, { FC, memo } from 'react';
import BookSvg from '../svg/book.svg';

export interface IBookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookIcon: FC<IBookIconProps> = memo(props => {
  return <BookSvg {...props} />;
});
