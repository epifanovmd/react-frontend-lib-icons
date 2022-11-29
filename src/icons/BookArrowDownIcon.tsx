import React, { FC, memo } from 'react';
import BookArrowDownSvg from '../svg/book-arrow-down.svg';

export interface IBookArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowDownIcon: FC<IBookArrowDownIconProps> = memo(props => {
  return <BookArrowDownSvg {...props} />;
});
