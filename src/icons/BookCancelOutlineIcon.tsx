import React, { FC, memo } from 'react';
import BookCancelOutlineSvg from '../svg/book-cancel-outline.svg';

export interface IBookCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookCancelOutlineIcon: FC<IBookCancelOutlineIconProps> = memo(props => {
  return <BookCancelOutlineSvg {...props} />;
});
