import React, { FC, memo } from 'react';
import BookCogOutlineSvg from '../svg/book-cog-outline.svg';

export interface IBookCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCogOutlineIcon: FC<IBookCogOutlineIconProps> = memo(props => {
  return <BookCogOutlineSvg {...props} />;
});
