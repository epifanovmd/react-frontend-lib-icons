import React, { FC, memo } from 'react';
import BookArrowUpSvg from '../svg/book-arrow-up.svg';

export interface IBookArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowUpIcon: FC<IBookArrowUpIconProps> = memo(props => {
  return <BookArrowUpSvg {...props} />;
});
