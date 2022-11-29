import React, { FC, memo } from 'react';
import BookArrowDownOutlineSvg from '../svg/book-arrow-down-outline.svg';

export interface IBookArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookArrowDownOutlineIcon: FC<IBookArrowDownOutlineIconProps> = memo(props => {
  return <BookArrowDownOutlineSvg {...props} />;
});
