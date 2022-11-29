import React, { FC, memo } from 'react';
import BookArrowLeftSvg from '../svg/book-arrow-left.svg';

export interface IBookArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowLeftIcon: FC<IBookArrowLeftIconProps> = memo(props => {
  return <BookArrowLeftSvg {...props} />;
});
