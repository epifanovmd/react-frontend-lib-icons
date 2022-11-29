import React, { FC, memo } from 'react';
import BookCogSvg from '../svg/book-cog.svg';

export interface IBookCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCogIcon: FC<IBookCogIconProps> = memo(props => {
  return <BookCogSvg {...props} />;
});
