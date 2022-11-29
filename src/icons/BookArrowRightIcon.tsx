import React, { FC, memo } from 'react';
import BookArrowRightSvg from '../svg/book-arrow-right.svg';

export interface IBookArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowRightIcon: FC<IBookArrowRightIconProps> = memo(props => {
  return <BookArrowRightSvg {...props} />;
});
