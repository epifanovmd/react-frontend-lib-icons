import React, { FC, memo } from 'react';
import BookshelfSvg from '../svg/bookshelf.svg';

export interface IBookshelfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookshelfIcon: FC<IBookshelfIconProps> = memo(props => {
  return <BookshelfSvg {...props} />;
});
