import React, { FC, memo } from 'react';
import BookArrowUpOutlineSvg from '../svg/book-arrow-up-outline.svg';

export interface IBookArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowUpOutlineIcon: FC<IBookArrowUpOutlineIconProps> = memo(props => {
  return <BookArrowUpOutlineSvg {...props} />;
});
